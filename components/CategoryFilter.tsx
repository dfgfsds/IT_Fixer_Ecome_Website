"use client";

import React, { useState } from "react";
import { Tag, ChevronDown, ChevronUp } from "lucide-react";

interface CategoryFilterProps {
    categories: any[];
    selectedCategory: number | null;
    onSelectCategory: (categoryId: number | null) => void;
    products: any[];
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
    categories,
    selectedCategory,
    onSelectCategory,
    products,
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (categoryId: number | null) => {
        onSelectCategory(categoryId);
        setIsOpen(false);
    };

    return (
        <div className="category-filter-modern">
            {/* Mobile Toggle View */}
            <div
                className="category-mobile-toggle d-lg-none d-flex justify-content-between align-items-center"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h3>
                    <Tag size={18} style={{ color: "#a6d719" }} />
                    Filter by Category
                </h3>
                <span className="text-white">
                    {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </span>
            </div>

            <h2 className="widget-title d-none d-lg-flex">
                Categories
            </h2>

            {/* Category List */}
            <ul className={`list-unstyled animate__animated animate__fadeIn ${isOpen ? "d-block" : "d-none d-lg-block"}`}>
                <li
                    className={`category-item-modern ${selectedCategory === null ? "active" : ""}`}
                    onClick={() => handleSelect(null)}
                >
                    <span>All Products</span>
                    {/* 
                    <span className="badge rounded-pill bg-dark text-secondary small">
                        {products?.length || 0}
                    </span> 
                    */}
                </li>

                {categories?.map((cat) => {
                    const count = products?.filter((p: any) => p.category === cat.id).length;
                    return (
                        <li
                            key={cat.id}
                            className={`category-item-modern ${selectedCategory === cat.id ? "active" : ""}`}
                            onClick={() => handleSelect(cat.id)}
                        >
                            <span>{cat.name}</span>
                            {/* 
                            <span className={`badge rounded-pill ${selectedCategory === cat.id ? "bg-white text-dark" : "bg-dark text-secondary"} small`}>
                                {count}
                            </span> 
                            */}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default CategoryFilter;
