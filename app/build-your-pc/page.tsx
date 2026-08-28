"use client";

import React, { useState, useEffect, useMemo } from 'react';
import {
  Cpu,
  Monitor,
  Zap,
  Box,
  Trash2,
  ShoppingCart,
  CheckCircle2,
  HardDrive,
  ChevronDown,
  ChevronUp,
  Loader2,
  Download,
  History,
  X,
  XCircle
} from "lucide-react";
import { useAuthRedirect } from '../../context/useAuthRedirect';
import { useVendor } from '@/context/VendorContext';
import ApiUrls from '@/api-endpoints/ApiUrls';


// Types
type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  image?: string;
  brand?: string;
  stock?: number;
};

type Category = {
  id: string;
  name: string;
  slug: string;
  icon: string;
  description: string;
};

export default function BuildYourPcPage() {
  useAuthRedirect({ requireAuth: true, redirectTo: '/login' });

  const [categories, setCategories] = useState<Category[]>([]);
  const [loadingCategories, setLoadingCategories] = useState(true);

  const [productsByCategory, setProductsByCategory] = useState<Record<string, Product[]>>({});
  const [loadingProducts, setLoadingProducts] = useState<Record<string, boolean>>({});

  const [selectedComponents, setSelectedComponents] = useState<Record<string, Product & { quantity?: number }>>({});
  const [openCategory, setOpenCategory] = useState<string>("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {vendorId} =useVendor();

  const [pastBuilds, setPastBuilds] = useState<any[]>([]);
  const [loadingPastBuilds, setLoadingPastBuilds] = useState(false);
  const [modalConfig, setModalConfig] = useState({ isOpen: false, type: 'success', message: '' });

  const fetchPastBuilds = async () => {
    const customerId = localStorage.getItem('userId');
    if (!customerId) return;
    setLoadingPastBuilds(true);
    try {
      const res = await fetch(`${ApiUrls.baseUrl}/pc-builder/quotations/?customer_id=${customerId}`);
      const data = await res.json();
      if (data.success && data.data) {
        setPastBuilds(data.data);
      }
    } catch (error) {
      console.error("Failed to fetch past builds:", error);
    } finally {
      setLoadingPastBuilds(false);
    }
  };

  useEffect(() => {
    fetchPastBuilds();
  }, []);

  useEffect(() => {
    // Fetch categories on mount
    fetch(`${ApiUrls.baseUrl}/pc-builder/categories/`)
      .then(res => res.json())
      .then(data => {
        if (data.success && data.data) {
          const reversedCategories = [...data.data].reverse();
          setCategories(reversedCategories);
          if (reversedCategories.length > 0) {
            const firstCatId = reversedCategories[0].id;
            setOpenCategory(firstCatId);
            fetchProducts(firstCatId, null);
          }
        }
      })
      .catch(err => console.error("Failed to fetch categories", err))
      .finally(() => setLoadingCategories(false));
  }, []);

  const fetchProducts = async (categoryId: string, referenceProductId: string | null) => {
    setLoadingProducts(prev => ({ ...prev, [categoryId]: true }));
    try {
      let urlObj: URL;
      if (referenceProductId) {
        urlObj = new URL(`${ApiUrls.baseUrl}/pc-builder/compatibility/${referenceProductId.trim()}/`);
      } else {
        urlObj = new URL(`${ApiUrls.baseUrl}/pc-builder/components/`);
      }
      urlObj.searchParams.append("category_id", categoryId.trim());
      const url = urlObj.toString();
      const res = await fetch(url);
      const data = await res.json();
      if (data.success && data.data) {
        const mappedProducts = data.data.map((item: any) => ({
          id: item.id,
          name: item.name,
          price: parseFloat(item.price) || 0,
          description: item.description,
          image: item.image,
          brand: item.brand,
          stock: item.stock
        }));
        setProductsByCategory(prev => ({ ...prev, [categoryId]: mappedProducts }));
      } else {
        setProductsByCategory(prev => ({ ...prev, [categoryId]: [] }));
      }
    } catch (err) {
      console.error("Failed to fetch products", err);
      setProductsByCategory(prev => ({ ...prev, [categoryId]: [] }));
    } finally {
      setLoadingProducts(prev => ({ ...prev, [categoryId]: false }));
    }
  };

  const getReferenceProductIdForTargetCategory = (targetIndex: number) => {
    if (targetIndex === 0) return null;
    if (targetIndex === 1) return selectedComponents[categories[0].id]?.id || null;
    return selectedComponents[categories[1].id]?.id || null;
  };

  const handleOpenCategory = (categoryId: string) => {
    const isOpen = openCategory === categoryId;
    if (isOpen) {
      setOpenCategory("");
    } else {
      setOpenCategory(categoryId);
      // Fetch products if not already loaded
      if (!productsByCategory[categoryId]) {
        const idx = categories.findIndex(c => c.id === categoryId);
        const refId = getReferenceProductIdForTargetCategory(idx);
        fetchProducts(categoryId, refId);
      }
    }
  };

  const handleSelectProduct = (categoryId: string, product: Product) => {
    setSelectedComponents((prev) => ({
      ...prev,
      [categoryId]: { ...product, quantity: 1 }
    }));

    const currentIndex = categories.findIndex(c => c.id === categoryId);
    if (currentIndex >= 0 && currentIndex < categories.length - 1) {
      const nextCategoryIndex = currentIndex + 1;
      const nextCategory = categories[nextCategoryIndex];
      setOpenCategory(nextCategory.id);

      let referenceIdForNext = null;
      if (nextCategoryIndex === 1) {
        referenceIdForNext = product.id;
      } else {
        if (currentIndex === 1) {
          referenceIdForNext = product.id;
        } else {
          referenceIdForNext = selectedComponents[categories[1].id]?.id || null;
        }
      }

      if (currentIndex < 2 || !productsByCategory[nextCategory.id]) {
        fetchProducts(nextCategory.id, referenceIdForNext);
      }

      if (currentIndex < 2) {
        setSelectedComponents(prev => {
          const next = { ...prev };
          for (let i = currentIndex + 1; i < categories.length; i++) {
            delete next[categories[i].id];
          }
          return next;
        });
        setProductsByCategory(prev => {
          const next = { ...prev };
          for (let i = currentIndex + 2; i < categories.length; i++) {
            delete next[categories[i].id];
          }
          return next;
        });
      }
    }
  };

  const handleRemoveProduct = (categoryId: string) => {
    setSelectedComponents((prev) => {
      const next = { ...prev };
      delete next[categoryId];

      const currentIndex = categories.findIndex(c => c.id === categoryId);
      if (currentIndex < 2) {
        for (let i = currentIndex + 1; i < categories.length; i++) {
          delete next[categories[i].id];
        }
      }
      return next;
    });
  };

  const updateQuantity = (categoryId: string, newQuantity: number) => {
    setSelectedComponents(prev => {
      if (!prev[categoryId]) return prev;
      return {
        ...prev,
        [categoryId]: { ...prev[categoryId], quantity: newQuantity }
      };
    });
  };

  const handleGenerateQuotation = async () => {
    setIsSubmitting(true);
    try {
      const customerId = localStorage.getItem('userId') || '1';
      
      const items = Object.values(selectedComponents).map(product => ({
        component_id: product.id,
        quantity: product.quantity || 1
      }));

      const payload = {
        customer: parseInt(customerId as string, 10) || 1,
        vendor_id: vendorId,
        build_name: "Custom PC Build",
        items: items
      };

      const response = await fetch(`${ApiUrls.baseUrl}/pc-builder/builds/complete/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload)
      });

      let data: any = {};
      try {
        data = await response.json();
      } catch (e) {
        console.error("Failed to parse JSON response");
      }

      if (response.ok) {
        setModalConfig({ isOpen: true, type: 'success', message: "Your quotation has been generated successfully. You can download the PDF from your Past Builds section." });
        fetchPastBuilds();
      } else {
        const errorMessage = data?.message || data?.error || data?.detail || "Failed to generate quotation. Please try again.";
        setModalConfig({ isOpen: true, type: 'error', message: errorMessage });
      }
    } catch (error) {
      console.error("Error generating quotation:", error);
      setModalConfig({ isOpen: true, type: 'error', message: "An error occurred while generating the quotation." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const totalPrice = useMemo(() => {
    return Object.values(selectedComponents).reduce((total, product) => total + (product.price * (product.quantity || 1)), 0);
  }, [selectedComponents]);

  const progressPercentage = categories.length > 0 ? (Object.keys(selectedComponents).length / categories.length) * 100 : 0;

  return (
    <main style={{ backgroundColor: '#0a0a0a', color: '#fff', minHeight: '100vh', paddingBottom: '80px' }}>

      {/* Header & Past Builds Section */}
      <section className="py-5 position-relative" style={{ borderBottom: '1px solid #222' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '400px', height: '400px', backgroundColor: '#CBFE1C', opacity: 0.05, filter: 'blur(80px)', borderRadius: '50%', zIndex: 0 }}></div>
        <div className="container position-relative z-1 pt-4 mt-2">
          <div className="row align-items-center">
            <div className={pastBuilds.length > 0 ? "col-lg-7" : "col-12"}>
              <h1 className="display-4 fw-bold mb-3">
                Build Your <span style={{ color: '#CBFE1C' }}>Dream PC</span>
              </h1>
              <p className="lead text-secondary mb-0" style={{ maxWidth: '800px' }}>
                Select components from each category below to assemble your custom PC. Our compatibility engine will ensure all your parts work perfectly together.
              </p>
            </div>
            
            {pastBuilds.length > 0 && (
              <div className="col-lg-5 mt-5 mt-lg-0">
                <div className="card border-0 rounded-4 p-4" style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <div className="d-flex align-items-center gap-2">
                      <History style={{ color: '#CBFE1C' }} size={20} />
                      <h5 className="fw-bold mb-0 text-white">Your Past Builds</h5>
                    </div>
                  </div>
                  
                  <div className="d-flex flex-column gap-3 pe-2" style={{ maxHeight: '250px', overflowY: 'auto' }}>
                    {pastBuilds.map((build) => (
                      <div key={build.id} className="d-flex justify-content-between align-items-center p-3 rounded-3" style={{ backgroundColor: 'rgba(0,0,0,0.4)', borderLeft: '3px solid #CBFE1C' }}>
                         <div>
                           <p className="fw-bold mb-1 text-white" style={{ fontSize: '0.95rem' }}>{build.build_name || "Custom PC"}</p>
                           <p className="text-secondary mb-0" style={{ fontSize: '0.8rem' }}>{build.quotation_number} • ₹{parseFloat(build.grand_total).toLocaleString('en-IN')}</p>
                         </div>
                         {build.pdf_url && (
                           <a
                              href={build.pdf_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-sm d-flex align-items-center justify-content-center flex-shrink-0 ms-3"
                              style={{ backgroundColor: 'rgba(203, 254, 28, 0.1)', color: '#CBFE1C', width: '36px', height: '36px', borderRadius: '50%', transition: 'all 0.2s ease' }}
                              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(203, 254, 28, 0.2)' }}
                              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(203, 254, 28, 0.1)' }}
                              title="Download PDF"
                            >
                              <Download size={16} />
                            </a>
                         )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Dynamic Modal */}
      {modalConfig.isOpen && (
        <div 
          className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center" 
          style={{ backgroundColor: 'rgba(0,0,0,0.8)', zIndex: 1050, backdropFilter: 'blur(5px)' }}
        >
          <div className="card border-0 rounded-4 p-5 position-relative text-center" style={{ backgroundColor: '#1a1a1a', maxWidth: '400px', width: '90%' }}>
            <button 
              onClick={() => setModalConfig({ ...modalConfig, isOpen: false })}
              className="btn btn-link position-absolute top-0 end-0 p-3" 
              style={{ color: '#888' }}
            >
              <X size={24} />
            </button>
            <div className="mb-4 d-flex justify-content-center">
              <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px', backgroundColor: modalConfig.type === 'success' ? 'rgba(203, 254, 28, 0.1)' : 'rgba(255, 76, 76, 0.1)', color: modalConfig.type === 'success' ? '#CBFE1C' : '#ff4c4c' }}>
                {modalConfig.type === 'success' ? <CheckCircle2 size={40} /> : <XCircle size={40} />}
              </div>
            </div>
            <h3 className="fw-bold mb-3">{modalConfig.type === 'success' ? 'Success!' : 'Oops!'}</h3>
            <p className="text-secondary mb-4">
              {modalConfig.message}
            </p>
            <button 
              className="btn w-100 fw-bold py-2" 
              style={{ backgroundColor: modalConfig.type === 'success' ? '#CBFE1C' : '#ff4c4c', color: modalConfig.type === 'success' ? '#000' : '#fff' }}
              onClick={() => setModalConfig({ ...modalConfig, isOpen: false })}
            >
              Continue
            </button>
          </div>
        </div>
      )}

      {/* Main Content Builder */}
      <section className="py-5">
        <div className="container">
          <div className="row g-5">

            {/* Left Column: Component Selection */}
            <div className="col-lg-8">
              <div className="d-flex align-items-center gap-3 mb-4">
                <Box style={{ color: '#CBFE1C' }} size={28} />
                <h3 className="fw-bold mb-0">Component Selection</h3>
              </div>

              {loadingCategories ? (
                <div className="d-flex flex-column align-items-center justify-content-center py-5">
                  <Loader2 size={40} className="mb-3" style={{ color: '#CBFE1C', animation: 'spin 1s linear infinite' }} />
                  <p className="text-secondary">Loading Categories...</p>
                  <style>{`@keyframes spin { 100% { transform: rotate(360deg); } }`}</style>
                </div>
              ) : (
                <div className="accordion-wrapper d-flex flex-column gap-3">
                  {categories.map((category, index) => {
                    const isOpen = openCategory === category.id;
                    const selectedProduct = selectedComponents[category.id];
                    const products = productsByCategory[category.id] || [];
                    const isLoading = loadingProducts[category.id];

                    // Disable category if its dependency is not fulfilled
                    const isFirstCategory = index === 0;
                    let isDisabled = false;
                    if (index === 1) {
                      isDisabled = !selectedComponents[categories[0].id];
                    } else if (index >= 2) {
                      isDisabled = !selectedComponents[categories[1].id];
                    }

                    return (
                      <div
                        key={category.id}
                        className="card border-0 rounded-3 overflow-hidden"
                        style={{
                          backgroundColor: '#1a1a1a',
                          border: isOpen ? '1px solid #CBFE1C' : '1px solid #333',
                          opacity: isDisabled ? 0.5 : 1
                        }}
                      >
                        {/* Accordion Header */}
                        <div
                          className="card-header border-0 d-flex justify-content-between align-items-center p-4"
                          style={{
                            backgroundColor: isOpen ? '#111' : '#1a1a1a',
                            cursor: isDisabled ? 'not-allowed' : 'pointer',
                            transition: 'all 0.3s ease'
                          }}
                          onClick={() => !isDisabled && handleOpenCategory(category.id)}
                        >
                          <div className="d-flex align-items-center gap-3">
                            <div
                              className="p-2 rounded d-flex align-items-center justify-content-center"
                              style={{
                                backgroundColor: selectedProduct ? 'rgba(203, 254, 28, 0.1)' : 'rgba(255,255,255,0.05)',
                                width: '48px', height: '48px'
                              }}
                            >
                              {category.icon ? (
                                <img
                                  src={category.icon}
                                  alt={category.name}
                                  style={{ width: '24px', height: '24px', objectFit: 'contain', filter: selectedProduct ? 'none' : 'invert(1)' }}
                                  onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = 'none';
                                  }}
                                />
                              ) : (
                                <Box size={24} style={{ color: selectedProduct ? '#CBFE1C' : '#fff' }} />
                              )}
                            </div>
                            <div>
                              <h5 className="mb-0 fw-bold" style={{ color: selectedProduct ? '#fff' : '#ccc' }}>
                                {category.name}
                              </h5>
                              {selectedProduct && (
                                <p className="mb-0 mt-1 fs-6 d-flex align-items-center gap-2" style={{ color: '#CBFE1C' }}>
                                  <CheckCircle2 size={16} /> {selectedProduct.name}
                                </p>
                              )}
                            </div>
                          </div>
                          <div className="text-secondary">
                            {isOpen ? <ChevronUp /> : <ChevronDown />}
                          </div>
                        </div>

                        {/* Accordion Body */}
                        {isOpen && (
                          <div className="card-body p-4" style={{ backgroundColor: '#0f0f0f', borderTop: '1px solid #222' }}>
                            {isLoading ? (
                              <div className="d-flex justify-content-center py-4">
                                <Loader2 size={32} style={{ color: '#CBFE1C', animation: 'spin 1s linear infinite' }} />
                              </div>
                            ) : products.length === 0 ? (
                              <div className="text-center py-4 text-secondary">
                                No products found for this category.
                              </div>
                            ) : (
                              <div className="d-flex flex-column gap-3">
                                {products.map((product) => {
                                  const isSelected = selectedProduct?.id === product.id;
                                  return (
                                    <div
                                      key={product.id}
                                      className="d-flex flex-column flex-md-row align-items-md-center justify-content-between p-4 rounded-3"
                                      style={{
                                        backgroundColor: isSelected ? 'rgba(203, 254, 28, 0.05)' : '#1a1a1a',
                                        border: isSelected ? '1px solid #CBFE1C' : '1px solid #333',
                                        transition: 'all 0.2s ease'
                                      }}
                                    >
                                      <div className="mb-3 mb-md-0 d-flex gap-3 align-items-center">
                                        {product.image && (
                                          <div style={{ width: '60px', height: '60px', flexShrink: 0, backgroundColor: '#fff', borderRadius: '8px', padding: '4px' }}>
                                            <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                          </div>
                                        )}
                                        <div>
                                          <h6 className="fw-bold mb-1 fs-5 text-white">{product.name}</h6>
                                          <p className="text-secondary mb-2" style={{ fontSize: '0.9rem' }}>{product.description}</p>
                                          <h5 className="fw-bold mb-0" style={{ color: '#CBFE1C' }}>₹{product.price.toLocaleString('en-IN')}</h5>
                                        </div>
                                      </div>
                                      <div>
                                        <button
                                          className="btn px-4 py-2 fw-bold w-100 w-md-auto d-flex align-items-center justify-content-center gap-2"
                                          style={{
                                            backgroundColor: isSelected ? '#CBFE1C' : 'transparent',
                                            color: isSelected ? '#000' : '#fff',
                                            border: isSelected ? '1px solid #CBFE1C' : '1px solid #555',
                                            minWidth: '130px'
                                          }}
                                          onClick={() => handleSelectProduct(category.id, product)}
                                        >
                                          {isSelected ? (
                                            <>
                                              <CheckCircle2 size={18} /> Selected
                                            </>
                                          ) : 'Select'}
                                        </button>
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Right Column: Build Summary */}
            <div className="col-lg-4">
              <div className="sticky-top" style={{ top: '100px' }}>
                <div className="card border-0 rounded-4 overflow-hidden shadow-lg" style={{ backgroundColor: '#1a1a1a', border: '1px solid #333' }}>

                  {/* Summary Header */}
                  <div className="p-4" style={{ background: 'linear-gradient(135deg, #111 0%, #1a1a1a 100%)', borderBottom: '1px solid #333' }}>
                    <h4 className="fw-bold d-flex align-items-center gap-2 mb-4 text-white">
                      <ShoppingCart size={24} style={{ color: '#CBFE1C' }} />
                      Your Build Summary
                    </h4>

                    <div className="mb-2 d-flex justify-content-between align-items-end">
                      <span className="text-secondary fs-6">Build Progress</span>
                      <span className="fw-bold" style={{ color: '#CBFE1C' }}>{Math.round(progressPercentage)}%</span>
                    </div>
                    <div className="progress" style={{ height: '8px', backgroundColor: '#333' }}>
                      <div
                        className="progress-bar progress-bar-striped progress-bar-animated"
                        role="progressbar"
                        style={{ width: `${progressPercentage}%`, backgroundColor: '#CBFE1C' }}
                        aria-valuenow={progressPercentage}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></div>
                    </div>
                  </div>

                  {/* Summary Items */}
                  <div className="p-4 overflow-auto" style={{ maxHeight: '400px', backgroundColor: '#0f0f0f' }}>
                    {Object.keys(selectedComponents).length === 0 ? (
                      <div className="text-center py-5">
                        <Box size={48} className="text-secondary mb-3 opacity-50" />
                        <p className="text-secondary mb-0">Your build is empty. Select components from the left to get started!</p>
                      </div>
                    ) : (
                      <div className="d-flex flex-column gap-3">
                        {categories.map((category) => {
                          const selected = selectedComponents[category.id];
                          if (!selected) return null;

                          return (
                            <div key={category.id} className="d-flex align-items-start gap-3 pb-3" style={{ borderBottom: '1px solid #222' }}>
                              <div className="p-2 rounded mt-1" style={{ backgroundColor: 'rgba(255,255,255,0.05)', color: '#ccc', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                {category.icon ? (
                                  <img src={category.icon} alt={category.name} style={{ width: '20px', height: '20px', filter: 'invert(1)' }} onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                                ) : (
                                  <Box size={20} />
                                )}
                              </div>
                              <div className="flex-grow-1">
                                <p className="text-secondary mb-1" style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                  {category.name}
                                </p>
                                <h6 className="fw-semibold text-white mb-1 lh-sm">{selected.name}</h6>
                                <p className="fw-bold mb-0" style={{ color: '#CBFE1C' }}>₹{(selected.price * (selected.quantity || 1)).toLocaleString('en-IN')}</p>
                              </div>
                              <div className="d-flex flex-column align-items-end gap-2 mt-1">
                                {(category.name.toLowerCase().includes('ram') || category.name.toLowerCase().includes('ssd') || category.name.toLowerCase().includes('storage')) && (
                                  <div className="d-flex align-items-center" style={{ backgroundColor: '#222', borderRadius: '4px', padding: '2px' }}>
                                    <button 
                                      className="btn btn-sm text-white p-1 d-flex align-items-center justify-content-center" 
                                      style={{ border: 'none', background: 'transparent', width: '20px', height: '20px' }}
                                      onClick={() => updateQuantity(category.id, Math.max(1, (selected.quantity || 1) - 1))}
                                    >
                                      -
                                    </button>
                                    <span className="text-white px-2" style={{ fontSize: '0.85rem' }}>{selected.quantity || 1}</span>
                                    <button 
                                      className="btn btn-sm text-white p-1 d-flex align-items-center justify-content-center" 
                                      style={{ border: 'none', background: 'transparent', width: '20px', height: '20px' }}
                                      onClick={() => {
                                        const isRam = category.name.toLowerCase().includes('ram');
                                        const maxQty = isRam ? 4 : 2;
                                        updateQuantity(category.id, Math.min(maxQty, (selected.quantity || 1) + 1));
                                      }}
                                    >
                                      +
                                    </button>
                                  </div>
                                )}
                                <button
                                  className="btn btn-sm btn-link text-danger p-0 border-0"
                                  onClick={() => handleRemoveProduct(category.id)}
                                  title="Remove item"
                                >
                                  <Trash2 size={18} />
                                </button>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  {/* Summary Footer */}
                  <div className="p-4" style={{ backgroundColor: '#1a1a1a', borderTop: '1px solid #333' }}>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <span className="text-secondary fs-5">Total Estimation</span>
                      <span className="fs-3 fw-bold text-white">₹{totalPrice.toLocaleString('en-IN')}</span>
                    </div>

                    <div className="form-check mb-4 d-flex align-items-start gap-2">
                      <input 
                        className="form-check-input mt-1" 
                        type="checkbox" 
                        id="termsCheck" 
                        checked={termsAccepted}
                        onChange={(e) => setTermsAccepted(e.target.checked)}
                        style={{ cursor: 'pointer', borderColor: '#555', backgroundColor: termsAccepted ? '#CBFE1C' : 'transparent', flexShrink: 0 }}
                      />
                      <label className="form-check-label text-secondary" htmlFor="termsCheck" style={{ fontSize: '0.85rem', cursor: 'pointer' }}>
                        I agree to the terms and conditions. I understand that the estimated prices may change after 24 hours.
                      </label>
                    </div>

                    <button
                      className="btn w-100 fw-bold py-3 fs-5 text-uppercase d-flex justify-content-center align-items-center gap-2"
                      style={{
                        backgroundColor: Object.keys(selectedComponents).length > 0 && termsAccepted ? '#CBFE1C' : '#333',
                        color: Object.keys(selectedComponents).length > 0 && termsAccepted ? '#000' : '#888',
                        border: 'none',
                        cursor: Object.keys(selectedComponents).length > 0 && termsAccepted && !isSubmitting ? 'pointer' : 'not-allowed',
                        opacity: isSubmitting ? 0.7 : 1
                      }}
                      disabled={Object.keys(selectedComponents).length === 0 || !termsAccepted || isSubmitting}
                      onClick={handleGenerateQuotation}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={24} style={{ animation: 'spin 1s linear infinite' }} />
                          Processing...
                        </>
                      ) : (
                        "Generate Quotation"
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
