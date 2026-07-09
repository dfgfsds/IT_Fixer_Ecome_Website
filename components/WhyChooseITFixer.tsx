// // "use client";

// // import React from "react";
// // import { 
// //   Cpu, 
// //   Gamepad2, 
// //   Tv, 
// //   Monitor, 
// //   Layers, 
// //   Wrench, 
// //   ShieldCheck, 
// //   MapPin, 
// //   Zap, 
// //   Thermometer, 
// //   TrendingUp, 
// //   Sparkles,
// //   ChevronDown
// // } from "lucide-react";

// // export default function WhyChooseITFixer() {
// //   const features = [
// //     { text: "Custom Gaming PC Builds", icon: <Gamepad2 size={24} /> },
// //     { text: "Streaming PCs for YouTube & Twitch", icon: <Tv size={24} /> },
// //     { text: "Video Editing Workstations", icon: <Monitor size={24} /> },
// //     { text: "Gaming Laptops & Creator Laptops", icon: <Cpu size={24} /> },
// //     { text: "NVIDIA RTX & AMD Radeon Graphics", icon: <Layers size={24} /> },
// //     { text: "Upgrade & Repair Support", icon: <Wrench size={24} /> },
// //     { text: "Genuine Components with Warranty", icon: <ShieldCheck size={24} /> },
// //     { text: "Chennai-Based Technical Support", icon: <MapPin size={24} /> },
// //   ];

// //   const benefits = [
// //     "Higher FPS Performance",
// //     "Better Cooling Efficiency",
// //     "Future Upgrade Options",
// //     "RGB Gaming Builds",
// //     "RTX Ray Tracing Support",
// //     "AI Powered Graphics",
// //     "Fast SSD Storage",
// //     "Low Latency Gaming",
// //   ];

// //   const trustPoints = [
// //     "Customized Gaming Builds",
// //     "Streaming Optimized PCs",
// //     "Editing Workstation Experts",
// //     "Genuine Hardware Components",
// //     "Competitive Pricing",
// //     "Professional Consultation",
// //     "Reliable After-Sales Support",
// //     "Fast Build & Delivery",
// //     "Performance Testing & Optimization",
// //   ];

// //   return (
// //     <section className="itfixer-section py-5">
// //       <div className="container">

// //         {/* Hero Header */}
// //         <div className="text-center mb-5 max-w-xl mx-auto">
// //           <h2 className="display-4 fw-bold main-title mb-3">
// //             Why Choose <span className="brand-highlight">IT Fixer</span>?
// //           </h2>
// //           <p className="subtitle-text">
// //             Chennai's trusted destination for Gaming PCs, Streaming Systems, 
// //             Video Editing Workstations, and High-End Gaming Laptops.
// //           </p>
// //         </div>

// //         {/* Feature Grid with Icons */}
// //         <div className="row g-4 mb-5">
// //           {features.map((item, index) => (
// //             <div key={index} className="col-xl-3 col-md-6">
// //               <div className="feature-card">
// //                 <div className="icon-wrapper mb-3">{item.icon}</div>
// //                 <h5 className="feature-text mb-0">{item.text}</h5>
// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //         {/* Split Section: Core Offerings vs Benefits */}
// //         <div className="row g-4 mb-5">
// //           <div className="col-lg-6">
// //             <div className="highlight-panel h-100 p-4 p-md-5 rounded-4">
// //               <span className="badge-tech mb-3">PERFORMANCE DRIVEN</span>
// //               <h3 className="section-subtitle mb-4">
// //                 Custom Gaming PCs Built for Competitive Esports
// //               </h3>
// //               <p className="panel-desc mb-4">
// //                 At IT Fixer, we design Gaming PCs that deliver ultra-smooth gameplay, 
// //                 high frame rates, low latency, and immersive graphics for modern gaming titles.
// //               </p>
// //               <div className="tag-cloud">
// //                 {["Esports Gaming", "AAA Titles", "VR Gaming", "AI Assisted Gaming"].map((tag, idx) => (
// //                   <span key={idx} className="tag-item">{tag}</span>
// //                 ))}
// //               </div>
// //             </div>
// //           </div>

// //           <div className="col-lg-6">
// //             <div className="benefits-panel h-100 p-4 p-md-5 rounded-4">
// //               <h3 className="section-subtitle mb-4">
// //                 Benefits of Custom Builds
// //               </h3>
// //               <div className="row g-3">
// //                 {benefits.map((item, i) => (
// //                   <div className="col-sm-6" key={i}>
// //                     <div className="benefit-badge">
// //                       <Zap size={14} className="me-2 text-brand" />
// //                       {item}
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Trust Grid */}
// //         <div className="trust-wrapper p-4 p-md-5 rounded-4 mb-5">
// //           <h3 className="section-subtitle text-center mb-5">
// //             Why Gamers & Creators Trust Us
// //           </h3>
// //           <div className="row g-3">
// //             {trustPoints.map((item, i) => (
// //               <div className="col-lg-4 col-md-6" key={i}>
// //                 <div className="trust-item">
// //                   <Sparkles size={16} className="me-2 text-brand" />
// //                   <span>{item}</span>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>

// //         {/* Modern Accordion FAQ Section */}
// // <div className="faq-wrapper mx-auto max-w-lg">
// //           <h3 className="section-subtitle text-center mb-4">
// //             Frequently Asked Questions (FAQs)
// //           </h3>
// //           <div className="faq-container">
// //             <details className="faq-item" open>
// //               <summary className="faq-trigger">
// //                 <h5>1.Where can I find a reliable gaming PC builder in Chennai?</h5>
// //                 <ChevronDown size={18} className="arrow-icon" />
// //               </summary>
// //               <div className="faq-content">
// //                 <p className="mb-0">
// //                   You can visit IT Fixer if you're looking for a reliable gaming PC build. The team helps you choose parts based on the games you play, your monitor resolution, FPS expectation and budget, instead of suggesting the same configuration for every customer. 
// //                 </p>
// //               </div>
// //             </details>

// //             <details className="faq-item">
// //               <summary className="faq-trigger">
// //                 <h5>2.Should I buy a gaming PC to stream games & make videos for Youtube?</h5>
// //                 <ChevronDown size={18} className="arrow-icon" />
// //               </summary>
// //               <div className="faq-content">
// //                 <p className="mb-0">
// //                   Yes. A gaming and streaming PC requires a well-balanced system as the PC must run the game, recording software, webcam, microphone and live stream simultaneously. For newbies however IT Fixer can recommend a reputable gaming PC builder in chennai for regular streamers.
// //                 </p>
// //               </div>
// //             </details>

// //             <details className="faq-item">
// //               <summary className="faq-trigger">
// //                 <h5>3.What type of PC is good for video editing?</h5>
// //                 <ChevronDown size={18} className="arrow-icon" />
// //               </summary>
// //               <div className="faq-content">
// //                 <p className="mb-0">
// //                   For video editing, you need a good processor, enough RAM, fast SSD storage & a suitable graphics card. At IT Fixer, editing PCs are planned based on your work, such as reels, YouTube videos, wedding editing, product videos, 4K projects or studio work.
// //                 </p>
// //               </div>
// //             </details>

// //             <details className="faq-item">
// //               <summary className="faq-trigger">
// //                 <h5>4.Do I need to buy a new PC, or can I upgrade my old one?</h5>
// //                 <ChevronDown size={18} className="arrow-icon" />
// //               </summary>
// //               <div className="faq-content">
// //                 <p className="mb-0">
// //                   You may not always need a new PC. If your current system is still usable, upgrades like SSD, RAM, graphics card, cooling or power supply changes can improve performance. At IT Fixer,our computer store in Chennai offers reliable upgrade support to check your requirements and suggest whether upgrading or replacing makes more sense. 
// //                 </p>
// //               </div>
// //             </details>

// //             <details className="faq-item">
// //               <summary className="faq-trigger">
// //                 <h5>5. Does IT Fixer sell gaming pc parts & gaming laptops in chennai?</h5>
// //                 <ChevronDown size={18} className="arrow-icon" />
// //               </summary>
// //               <div className="faq-content">
// //                 <p className="mb-0">
// //                   Yes. Along with custom PC assembling. IT Fixer also helps customers who are looking for gaming laptops. They also support those who need creator laptops or want to upgrade their computer with graphics cards. You can also find SSDs, RAM and motherboards there.
// //                 </p>
// //               </div>
// //             </details>

// //             <details className="faq-item">
// //               <summary className="faq-trigger">
// //                 <h5>6.why should you go to a computer store in chennai instead of buying parts online?</h5>
// //                 <ChevronDown size={18} className="arrow-icon" />
// //               </summary>
// //               <div className="faq-content">
// //                 <p className="mb-0">
// //                   Online buying is useful, but custom PC build needs proper part matching. A wrong motherboard, weak power supply, poor airflow cabinet or low RAM choice can affect performance later. At a local shop like IT Fixer, you can discuss your usage directly and get guidance before spending money.
// //                 </p>
// //               </div>
// //             </details>
// //           </div>
// //         </div>

// //       </div>

// //       <style jsx>{`
// //         .itfixer-section {
// //           background-color: #080808;
// //           color: #f5f5f5;
// //           font-family: system-ui, -apple-system, sans-serif;
// //         }
// //         .max-w-xl { max-width: 768px; }
// //         .max-w-lg { max-width: 850px; }
// //         .text-brand { color: #C6FF00; }

// //         .main-title {
// //           letter-spacing: -1px;
// //         }
// //         .brand-highlight {
// //           color: #C6FF00;
// //           text-shadow: 0 0 20px rgba(198, 255, 0, 0.2);
// //         }
// //         .subtitle-text {
// //           color: #a0a0a0;
// //           font-size: 1.125rem;
// //           line-height: 1.7;
// //         }
// //         .section-subtitle {
// //           color: #ffffff;
// //           font-weight: 700;
// //           letter-spacing: -0.5px;
// //         }

// //         /* Feature Cards */
// //         .feature-card {
// //           background: #121212;
// //           border: 1px solid rgba(255, 255, 255, 0.05);
// //           border-radius: 16px;
// //           padding: 24px;
// //           height: 100%;
// //           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
// //         }
// //         .feature-card:hover {
// //           border-color: rgba(198, 255, 0, 0.4);
// //           background: #161616;
// //           transform: translateY(-4px);
// //           box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4);
// //         }
// //         .icon-wrapper {
// //           color: #C6FF00;
// //           background: rgba(198, 255, 0, 0.06);
// //           width: 48px;
// //           height: 48px;
// //           display: flex;
// //           align-items: center;
// //           justify-content: center;
// //           border-radius: 10px;
// //           border: 1px solid rgba(198, 255, 0, 0.15);
// //         }
// //         .feature-text {
// //           font-size: 1.05rem;
// //           font-weight: 600;
// //           color: #e5e5e5;
// //         }

// //         /* Panels layout */
// //         .highlight-panel {
// //           background: linear-gradient(145deg, #121212 0%, #0d0d0d 100%);
// //           border: 1px solid rgba(198, 255, 0, 0.15);
// //         }
// //         .badge-tech {
// //           background: rgba(198, 255, 0, 0.1);
// //           color: #C6FF00;
// //           padding: 6px 12px;
// //           font-size: 0.75rem;
// //           font-weight: 700;
// //           letter-spacing: 1px;
// //           border-radius: 20px;
// //           display: inline-block;
// //         }
// //         .panel-desc {
// //           color: #b0b0b0;
// //           line-height: 1.6;
// //         }
// //         .tag-cloud {
// //           display: flex;
// //           flex-wrap: wrap;
// //           gap: 10px;
// //         }
// //         .tag-item {
// //           background: #181818;
// //           border: 1px solid rgba(255, 255, 255, 0.05);
// //           padding: 6px 14px;
// //           border-radius: 8px;
// //           font-size: 0.85rem;
// //           font-weight: 500;
// //           color: #d0d0d0;
// //         }

// //         .benefits-panel {
// //           background: #121212;
// //           border: 1px solid rgba(255, 255, 255, 0.05);
// //         }
// //         .benefit-badge {
// //           background: #161616;
// //           border: 1px solid rgba(255, 255, 255, 0.03);
// //           padding: 12px 16px;
// //           border-radius: 10px;
// //           font-size: 0.9rem;
// //           font-weight: 500;
// //           display: flex;
// //           align-items: center;
// //           color: #e0e0e0;
// //         }

// //         /* Trust Box */
// //         .trust-wrapper {
// //           background: #0d0d0d;
// //           border: 1px solid rgba(255, 255, 255, 0.03);
// //         }
// //         .trust-item {
// //           display: flex;
// //           align-items: center;
// //           background: #121212;
// //           padding: 14px 20px;
// //           border-radius: 10px;
// //           font-size: 0.95rem;
// //           color: #d5d5d5;
// //           border: 1px solid rgba(255, 255, 255, 0.02);
// //         }

// //         /* FAQ Layout Accordin Type */
// //         .faq-container {
// //           display: flex;
// //           flex-direction: column;
// //           gap: 12px;
// //         }
// //         .faq-item {
// //           background: #121212;
// //           border: 1px solid rgba(255, 255, 255, 0.05);
// //           border-radius: 12px;
// //           overflow: hidden;
// //         }
// //         .faq-trigger {
// //           padding: 18px 24px;
// //           font-weight: 600;
// //           color: #ffffff;
// //           cursor: pointer;
// //           display: flex;
// //           align-items: center;
// //           justify-content: space-between;
// //           user-select: none;
// //         }
// //         .faq-trigger::-webkit-details-marker { display: none; }
// //         .faq-trigger::marker { display: none; }
// //         .faq-trigger:hover { color: #C6FF00; }

// //         .arrow-icon {
// //           transition: transform 0.2s ease;
// //           color: #666;
// //         }
// //         .faq-item[open] .arrow-icon {
// //           transform: rotate(180deg);
// //           color: #C6FF00;
// //         }
// //         .faq-content {
// //           padding: 0 24px 20px;
// //           color: #b0b0b0;
// //           font-size: 0.95rem;
// //           line-height: 1.6;
// //         }
// //       `}</style>
// //     </section>
// //   );
// // }


// "use client";

// import React from "react";
// import {
//   Cpu,
//   Gamepad2,
//   Tv,
//   Monitor,
//   Layers,
//   Wrench,
//   ShieldCheck,
//   MapPin,
//   Zap,
//   Sparkles
// } from "lucide-react";

// export default function WhyChooseITFixer() {
//   const features = [
//     { text: "Custom Gaming PC Builds", icon: <Gamepad2 size={24} /> },
//     { text: "Streaming PCs for YouTube & Twitch", icon: <Tv size={24} /> },
//     { text: "Video Editing Workstations", icon: <Monitor size={24} /> },
//     { text: "Gaming Laptops & Creator Laptops", icon: <Cpu size={24} /> },
//     { text: "NVIDIA RTX & AMD Radeon Graphics", icon: <Layers size={24} /> },
//     { text: "Upgrade & Repair Support", icon: <Wrench size={24} /> },
//     { text: "Genuine Components with Warranty", icon: <ShieldCheck size={24} /> },
//     { text: "Chennai-Based Technical Support", icon: <MapPin size={24} /> },
//   ];

//   const benefits = [
//     "Higher FPS Performance",
//     "Better Cooling Efficiency",
//     "Future Upgrade Options",
//     "RGB Gaming Builds",
//     "RTX Ray Tracing Support",
//     "AI Powered Graphics",
//     "Fast SSD Storage",
//     "Low Latency Gaming",
//   ];

//   const trustPoints = [
//     "Customized Gaming Builds",
//     "Streaming Optimized PCs",
//     "Editing Workstation Experts",
//     "Genuine Hardware Components",
//     "Competitive Pricing",
//     "Professional Consultation",
//     "Reliable After-Sales Support",
//     "Fast Build & Delivery",
//     "Performance Testing & Optimization",
//   ];

//   const testimonials = [
//     {
//       review: "IT Fixer is truly the best gaming PC shop in Chennai. I got a custom gaming PC built with an RTX GPU, liquid cooling, and top-end Ryzen processor. The team explained the gaming PC configuration, pricing, and future upgrades clearly. My new rig delivers high FPS gaming performance in Valorant and GTA V. Highly recommend their professional gaming PC builders!",
//       name: "Arun Kumar",
//       role: "Competitive Gamer & Streamer",
//     },
//     {
//       review: "If you're searching for a gaming PC shop near me, IT Fixer is the one! Their experts helped me choose the perfect budget gaming PC in Chennai with SSD, 16GB RAM, and a powerful graphics card. The build quality is excellent, and the cable management is super clean. Best place to buy gaming PC in Chennai for any budget.",
//       name: "Sneha R",
//       role: "Tech Student & Casual Gamer",
//     },
//     {
//       review: "I needed a gaming PC for streaming and video editing, and IT Fixer built a beast! They provided the right GPU upgrade, optimized BIOS setup, and performed complete PC stress testing. The performance is flawless even with heavy editing and 4K rendering. Truly the trusted gaming PC shop in Chennai with genuine components.",
//       name: "Rahul Dev",
//       role: "Video Editor & Content Creator",
//     },
//     {
//       review: "I was confused between prebuilt vs custom gaming PC, and IT Fixer guided me with complete transparency. They showed me multiple gaming PC configuration options within my budget and helped me build a custom gaming PC under 1 lakh in Chennai. Amazing customer support and the most reliable gaming computer store I’ve dealt with.",
//       name: "Meera S",
//       role: "IT Professional",
//     },
//     {
//       review: "The best gaming PC showroom in Chennai! I visited from Velachery, and the team provided me with a high-end gaming desktop that fits my esports needs. The pricing is competitive, and they use only genuine PC parts. If you're in T Nagar, Tambaram, or Anna Nagar, IT Fixer is worth the trip!",
//       name: "Karthik Raj",
//       role: "Esports Player (Valorant)",
//     },
//     {
//       review: "As a beginner gamer, I didn’t know where to start. IT Fixer helped me understand gaming PC prices in Chennai, recommended the right Intel i5 gaming processor, and built an upgrade-ready system with RTX graphics. Smooth gameplay, no bottlenecks, and amazing after-sales gaming PC support in Chennai. Truly the best PC builder in Chennai!",
//       name: "Vishal Prakash",
//       role: "First-Time Gaming PC Buyer",
//     },
//   ];

//   return (
//     <section className="itfixer-section py-5">
//       <div className="container">

//         {/* Hero Header */}
//         <div className="text-center mb-5 max-w-xl mx-auto">
//           <h2 className="display-4 fw-bold main-title mb-3">
//             Why Choose <span className="brand-highlight">IT Fixer</span>?
//           </h2>
//           <p className="subtitle-text">
//             Chennai's trusted destination for Gaming PCs, Streaming Systems,
//             Video Editing Workstations, and High-End Gaming Laptops.
//           </p>
//         </div>

//         {/* Feature Grid with Icons */}
//         <div className="row g-4 mb-5">
//           {features.map((item, index) => (
//             <div key={index} className="col-xl-3 col-md-6">
//               <div className="feature-card">
//                 <div className="icon-wrapper mb-3">{item.icon}</div>
//                 <h5 className="feature-text mb-0">{item.text}</h5>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Split Section: Core Offerings vs Benefits */}
//         <div className="row g-4 mb-5">
//           <div className="col-lg-6">
//             <div className="highlight-panel h-100 p-4 p-md-5 rounded-4">
//               <span className="badge-tech mb-3">PERFORMANCE DRIVEN</span>
//               <h3 className="section-subtitle mb-4">
//                 Custom Gaming PCs Built for Competitive Esports
//               </h3>
//               <p className="panel-desc mb-4">
//                 At IT Fixer, we design Gaming PCs that deliver ultra-smooth gameplay,
//                 high frame rates, low latency, and immersive graphics for modern gaming titles.
//               </p>
//               <div className="tag-cloud">
//                 {["Esports Gaming", "AAA Titles", "VR Gaming", "AI Assisted Gaming"].map((tag, idx) => (
//                   <span key={idx} className="tag-item">{tag}</span>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <div className="col-lg-6">
//             <div className="benefits-panel h-100 p-4 p-md-5 rounded-4">
//               <h3 className="section-subtitle mb-4">
//                 Benefits of Custom Builds
//               </h3>
//               <div className="row g-3">
//                 {benefits.map((item, i) => (
//                   <div className="col-sm-6" key={i}>
//                     <div className="benefit-badge">
//                       <Zap size={14} className="me-2 text-brand" />
//                       {item}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Trust Grid */}
//         <div className="trust-wrapper p-4 p-md-5 rounded-4 mb-5">
//           <h3 className="section-subtitle text-center mb-5">
//             Why Gamers & Creators Trust Us
//           </h3>
//           <div className="row g-3">
//             {trustPoints.map((item, i) => (
//               <div className="col-lg-4 col-md-6" key={i}>
//                 <div className="trust-item">
//                   <Sparkles size={16} className="me-2 text-brand" />
//                   <span>{item}</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Testimonial Section Appended (Original Layout Maintained) */}
//         <div className="testimonial-section-2 section-padding pt-2 mt-5">
//           <div className="row g-4 align-items-center">
//             <div className="col-xl-6">
//               <div className="testimonial-box-items-2">
//                 <div className="border-shape">
//                   <img src="assets/img/home-2/border-shape.png" alt="" />
//                 </div>

//                 <div className="swiper tetsimonial-slider-2">
//                   <div className="swiper-wrapper">
//                     {testimonials.map((item, index) => (
//                       <div className="swiper-slide" key={index}>
//                         <div className="testimonial-box-slider">
//                           <div className="quote-icon">
//                             <img src="assets/img/home-2/quote.png" alt="img" />
//                           </div>
//                           <p>"{item.review}"</p>
//                           <div className="client-info-items">
//                             <div className="client-info">
//                               <img src="https://www.google.com/favicon.ico" alt="Google" />
//                               <div className="content">
//                                 <h4>{item.name}</h4>
//                                 <span>{item.role}</span>
//                               </div>
//                             </div>
//                             <div className="star">
//                               {[...Array(5)].map((_, i) => (
//                                 <i key={i} className="fa-solid fa-star"></i>
//                               ))}
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="testi-pagi">
//                   <div className="array-button d-flex align-items-center">
//                     <button className="array-prev">
//                       <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
//                         <g clipPath="url(#clip0_0_434)">
//                           <path d="M1.16006 18L14.762 18C15.4019 18 15.9222 17.4797 15.9222 16.8398C15.9222 16.2 15.4019 15.6797 14.762 15.6797L3.96553 15.6797L17.6589 1.98281C18.1124 1.5293 18.1124 0.794531 17.6589 0.341017C17.2054 -0.112499 16.4706 -0.112499 16.0171 0.341017L2.32373 14.0379L2.32373 3.24141C2.32373 2.60156 1.80342 2.08125 1.16357 2.08125C0.52373 2.08125 0.00341662 2.60156 0.00341668 3.24141L0.00341787 16.8398C-9.73203e-05 17.4797 0.520214 18 1.16006 18Z" fill="#0B0E13" />
//                         </g>
//                         <defs>
//                           <clipPath id="clip0_0_434)">
//                             <rect width="18" height="18" fill="white" transform="translate(18 18) rotate(180)" />
//                           </clipPath>
//                         </defs>
//                       </svg>
//                     </button>
//                     <button className="array-next">
//                       <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
//                         <g clipPath="url(#clip0_0_427)">
//                           <path d="M16.8399 0H3.23799C2.59814 0 2.07783 0.520312 2.07783 1.16016C2.07783 1.8 2.59814 2.32031 3.23799 2.32031H14.0345L0.341113 16.0172C-0.112402 16.4707 -0.112402 17.2055 0.341113 17.659C0.794629 18.1125 1.52939 18.1125 1.98291 17.659L15.6763 3.96211V14.7586C15.6763 15.3984 16.1966 15.9187 16.8364 15.9187C17.4763 15.9187 17.9966 15.3984 17.9966 14.7586V1.16016C18.0001 0.520312 17.4798 0 16.8399 0Z" fill="#0B0E13" />
//                         </g>
//                         <defs>
//                           <clipPath id="clip0_0_427">
//                             <rect width="18" height="18" fill="white" />
//                           </clipPath>
//                         </defs>
//                       </svg>
//                     </button>
//                   </div>
//                   <div className="testimonial-pagination">
//                     <span className="current">01</span> / <span className="total">{String(testimonials.length).padStart(2, "0")}</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="col-xl-6">
//               <div className="testimonial-right-items">
//                 <div className="section-title mb-4">
//                   <h6 className="subtitle tz-sub-tilte tz-sub-anim text-uppercase tx-subTitle">
//                     our testimonials
//                   </h6>
//                   <h2 className="tx-title sec_title text-uppercase tz-itm-title tz-itm-anim">
//                     Gamers Talk About IT Fixer
//                   </h2>
//                 </div>
//                 <div className="row g-4 mt-3">
//                   <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
//                     <div className="testimonial-image-1">
//                       <div className="overlay-style"></div>
//                       <img src="assets/img/home-2/testi-1.jpg" alt="img" />
//                       <div className="testimonial-counter">
//                         <img src="assets/img/home-2/testi-count.png" alt="img" />
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
//                     <div className="testimonial-image-1">
//                       <img src="assets/img/home-2/testi-2.jpg" alt="img" />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//       </div>

//       <style jsx>{`
//         .itfixer-section {
//           background-color: #080808;
//           color: #f5f5f5;
//           font-family: system-ui, -apple-system, sans-serif;
//         }
//         .max-w-xl { max-width: 768px; }
//         .text-brand { color: #C6FF00; }

//         .main-title {
//           letter-spacing: -1px;
//         }
//         .brand-highlight {
//           color: #C6FF00;
//           text-shadow: 0 0 20px rgba(198, 255, 0, 0.2);
//         }
//         .subtitle-text {
//           color: #a0a0a0;
//           font-size: 1.125rem;
//           line-height: 1.7;
//         }
//         .section-subtitle {
//           color: #ffffff;
//           font-weight: 700;
//           letter-spacing: -0.5px;
//         }

//         /* Feature Cards */
//         .feature-card {
//           background: #121212;
//           border: 1px solid rgba(255, 255, 255, 0.05);
//           border-radius: 16px;
//           padding: 24px;
//           height: 100%;
//           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
//         }
//         .feature-card:hover {
//           border-color: rgba(198, 255, 0, 0.4);
//           background: #161616;
//           transform: translateY(-4px);
//           box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4);
//         }
//         .icon-wrapper {
//           color: #C6FF00;
//           background: rgba(198, 255, 0, 0.06);
//           width: 48px;
//           height: 48px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           border-radius: 10px;
//           border: 1px solid rgba(198, 255, 0, 0.15);
//         }
//         .feature-text {
//           font-size: 1.05rem;
//           font-weight: 600;
//           color: #e5e5e5;
//         }

//         /* Panels layout */
//         .highlight-panel {
//           background: linear-gradient(145deg, #121212 0%, #0d0d0d 100%);
//           border: 1px solid rgba(198, 255, 0, 0.15);
//         }
//         .badge-tech {
//           background: rgba(198, 255, 0, 0.1);
//           color: #C6FF00;
//           padding: 6px 12px;
//           font-size: 0.75rem;
//           font-weight: 700;
//           letter-spacing: 1px;
//           border-radius: 20px;
//           display: inline-block;
//         }
//         .panel-desc {
//           color: #b0b0b0;
//           line-height: 1.6;
//         }
//         .tag-cloud {
//           display: flex;
//           flex-wrap: wrap;
//           gap: 10px;
//         }
//         .tag-item {
//           background: #181818;
//           border: 1px solid rgba(255, 255, 255, 0.05);
//           padding: 6px 14px;
//           border-radius: 8px;
//           font-size: 0.85rem;
//           font-weight: 500;
//           color: #d0d0d0;
//         }

//         .benefits-panel {
//           background: #121212;
//           border: 1px solid rgba(255, 255, 255, 0.05);
//         }
//         .benefit-badge {
//           background: #161616;
//           border: 1px solid rgba(255, 255, 255, 0.03);
//           padding: 12px 16px;
//           border-radius: 10px;
//           font-size: 0.9rem;
//           font-weight: 500;
//           display: flex;
//           align-items: center;
//           color: #e0e0e0;
//         }

//         /* Trust Box */
//         .trust-wrapper {
//           background: #0d0d0d;
//           border: 1px solid rgba(255, 255, 255, 0.03);
//         }
//         .trust-item {
//           display: flex;
//           align-items: center;
//           background: #121212;
//           padding: 14px 20px;
//           border-radius: 10px;
//           font-size: 0.95rem;
//           color: #d5d5d5;
//           border: 1px solid rgba(255, 255, 255, 0.02);
//         }
//       `}</style>
//     </section>
//   );
// }

"use client";

import React, { useState } from "react";
import {
  Cpu,
  Gamepad2,
  Tv,
  Monitor,
  Layers,
  Wrench,
  ShieldCheck,
  MapPin,
  Zap,
  Sparkles
} from "lucide-react";

export default function WhyChooseITFixer() {
  const [isExpanded, setIsExpanded] = useState(false);

  const features = [
    { text: "Custom Gaming PC Builds", icon: <Gamepad2 size={24} /> },
    { text: "Streaming PCs for YouTube & Twitch", icon: <Tv size={24} /> },
    { text: "Video Editing Workstations", icon: <Monitor size={24} /> },
    { text: "Gaming Laptops & Creator Laptops", icon: <Cpu size={24} /> },
    { text: "NVIDIA RTX & AMD Radeon Graphics", icon: <Layers size={24} /> },
    { text: "Upgrade & Repair Support", icon: <Wrench size={24} /> },
    { text: "Genuine Components with Warranty", icon: <ShieldCheck size={24} /> },
    { text: "Chennai-Based Technical Support", icon: <MapPin size={24} /> },
  ];

  const benefits = [
    "Higher FPS Performance",
    "Better Cooling Efficiency",
    "Future Upgrade Options",
    "RGB Gaming Builds",
    "RTX Ray Tracing Support",
    "AI Powered Graphics",
    "Fast SSD Storage",
    "Low Latency Gaming",
  ];

  const trustPoints = [
    "Customized Gaming Builds",
    "Streaming Optimized PCs",
    "Editing Workstation Experts",
    "Genuine Hardware Components",
    "Competitive Pricing",
    "Professional Consultation",
    "Reliable After-Sales Support",
    "Fast Build & Delivery",
    "Performance Testing & Optimization",
  ];


  return (
    <section className="itfixer-section py-5">
      <div className="container">

        {/* Hero Header */}
        {/* <div className="text-center mb-5 max-w-xl mx-auto">
          <h2 className="display-4 fw-bold main-title mb-3">
            What Makes <span className="brand-highlight">IT Fixer</span> Different?
          </h2>
          <p className="subtitle-text">
            Chennai's trusted destination for Gaming PCs, Streaming Systems,
            Video Editing Workstations, and High-End Gaming Laptops.
          </p>
        </div> */}

        <div className="text-center mb-5 w-100 mx-auto" style={{ maxWidth: "100%" }}>
          <h2 className="display-4 fw-bold main-title mb-3" style={{ whiteSpace: "nowrap", letterSpacing: "-1px" }}>
            What Makes <span className="brand-highlight">IT Fixer</span> Different?
          </h2>
          <p className="subtitle-text mx-auto" style={{ maxWidth: "700px" }}>
            Chennai's trusted destination for Gaming PCs, Streaming Systems,
            Video Editing Workstations, and High-End Gaming Laptops.
          </p>
        </div>

        {/* Feature Grid with Icons */}
        <div className="row g-4 mb-5">
          {features.map((item, index) => (
            <div key={index} className="col-xl-3 col-md-6">
              <div className="feature-card">
                <div className="icon-wrapper mb-3">{item.icon}</div>
                <h5 className="feature-text mb-0">{item.text}</h5>
              </div>
            </div>
          ))}
        </div>

        {/* Split Section: Core Offerings vs Benefits */}
        {/* <div className="row g-4 mb-5">
          <div className="col-lg-6">
            <div className="highlight-panel h-100 p-4 p-md-5 rounded-4">
              <span className="badge-tech mb-3">PERFORMANCE DRIVEN</span>
              <h3 className="section-subtitle mb-4">
                Custom Gaming PCs Built for Competitive Esports
              </h3>
              <p className="panel-desc mb-4">
                At IT Fixer, we design Gaming PCs that deliver ultra-smooth gameplay,
                high frame rates, low latency, and immersive graphics for modern gaming titles.
              </p>
              <div className="tag-cloud">
                {["Esports Gaming", "AAA Titles", "VR Gaming", "AI Assisted Gaming"].map((tag, idx) => (
                  <span key={idx} className="tag-item">{tag}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="benefits-panel h-100 p-4 p-md-5 rounded-4">
              <h3 className="section-subtitle mb-4">
                Benefits of Custom Builds
              </h3>
              <div className="row g-3">
                {benefits.map((item, i) => (
                  <div className="col-sm-6" key={i}>
                    <div className="benefit-badge">
                      <Zap size={14} className="me-2 text-brand" />
                      {item}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div> */}

        {/* Trust Grid */}
        {/* <div className="trust-wrapper p-4 p-md-5 rounded-4 mb-5">
          <h3 className="section-subtitle text-center mb-5">
            Why Gamers & Creators Trust Us
          </h3>
          <div className="row g-3">
            {trustPoints.map((item, i) => (
              <div className="col-lg-4 col-md-6" key={i}>
                <div className="trust-item">
                  <Sparkles size={16} className="me-2 text-brand" />
                  <span>{item}</span>
                </div>
              </div>
            ))}
          </div>
        </div> */}



        {isExpanded && (
          <div className="seo-content-wrapper mt-4 p-4 p-md-5 rounded-4 animate-fade-in">
            {/* Main SEO Header */}
            <div className="seo-hero-box mb-5 p-4 rounded-4 border border-secondary border-opacity-10 text-center">
              <h1 className="seo-h1 fw-bold tracking-tight mb-3">
                Top Gaming PC Builder in Chennai for Gaming, Streaming & Editing
              </h1>
              <p className="seo-p subtitle-lead mx-auto mb-0" style={{ maxWidth: "850px" }}>
                Whether you're building your first gaming PC, upgrading to an RTX graphics card, buying a gaming laptop, setting up a YouTube streaming PC or planning a professional video editing pc, IT Fixer provides expert guidance, genuine components & reliable after sales support right here in Chennai.
              </p>
            </div>

            {/* Section 1: About & Expert Guidance Grid */}
            <div className="row g-4 mb-5">
              <div className="col-12 col-md-6">
                <div className="feature-card highlight-panel d-flex flex-column h-100">
                  <div className="badge-tech mb-3 text-white bg-dark">ABOUT</div>
                  <h2 className="seo-h2 mt-0">About IT Fixer</h2>
                  <p className="seo-p">
                    IT Fixer, powered by Sigmah Enterprises, has been helping Chennai's gaming and creator community with performance driven computer solutions. Over the years, we've assembled systems for competitive gamers, full time streamers, freelance editors and studios each with different priorities.
                  </p>
                  <p className="seo-p mb-0 mt-3 border-top border-secondary border-opacity-10 pt-3">
                    A competitive gamer needs high FPS and low latency. A streamer needs a PC that can deal with gameplay, recording and live broadcast, all at once. IT Fixer has become a trusted destination for quality IT products and solutions.
                  </p>
                </div>
              </div>

              <div className="col-12 col-md-6">
                <div className="feature-card d-flex flex-column h-100">
                  <div className="badge-tech mb-3 text-white bg-dark">GUIDANCE</div>
                  <h2 className="seo-h2 mt-0">Expert Guidance from Gaming Store in Chennai</h2>
                  <p className="seo-p">
                    Our technicians guide you through processors, graphics cards, ram, SSD storage, cooling systems, cabinets and power supplies before finalising any build.
                  </p>
                  <p className="seo-p mb-0 mt-auto border-top border-secondary border-opacity-10 pt-3  text-opacity-75">
                    Our hands-on approach makes sure you avoid wrong configurations, overspending or performance bottlenecks. These are the same mistakes we see a lot when people buy PCs online without proper guidance.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2: Custom Gaming PC Builder Cloud Layout */}
            <div className="feature-card mb-5">
              <h3 className="seo-h3 mt-0 mb-3 text-brand">Custom Gaming PC Builder in Chennai</h3>
              <p className="seo-p mb-4">
                A custom built gaming PC gives far better value because every component is chosen for your games, resolution, refresh rate and budget.
              </p>

              <div className="mb-4">
                <p className="seo-p fw-bold text-white mb-2">IT Fixer specializes in gaming PCs and gaming for:</p>
                <div className="tag-cloud">
                  <span className="tag-item border-brand">Esports</span>
                  <span className="tag-item border-brand">AAA titles</span>
                  <span className="tag-item border-brand">High refresh gaming</span>
                  <span className="tag-item border-brand">1080p</span>
                  <span className="tag-item border-brand">1440p</span>
                  <span className="tag-item border-brand">4K gaming</span>
                  <span className="tag-item border-brand">VR ready setups.</span>
                </div>
              </div>

              <div className="mb-3">
                <p className="seo-p fw-bold text-white mb-2">We guide you on which Intel or AMD processor to choose, the right:</p>
                <div className="tag-cloud">
                  <span className="tag-item border-brand">NVIDIA RTX</span>
                  <span className="tag-item border-brand">AMD Radeon graphics card</span>
                  <span className="tag-item border-brand">Fast RAM</span>
                  <span className="tag-item border-brand">NVMe SSDs</span>
                  <span className="tag-item border-brand">Optimal cooling</span>
                  <span className="tag-item border-brand">Power supply</span>
                </div>
              </div>

              <p className="seo-p mt-4 mb-0 text-white-50 font-monospace small text-end">
                That's why IT Fixer is a leading gaming PC builder in Chennai.
              </p>
            </div>

            {/* Section 3: Use Case Specifics for Streamers & Editors */}
            <div className="row g-4 mb-5">
              <div className="col-12 col-md-6">
                <div className="feature-card benefits-panel d-flex flex-column h-100">
                  <h2 className="seo-h2 mt-0">Streaming PCs for YouTubers & Live Creators</h2>
                  <p className="seo-p">
                    Streaming demands more than raw gaming power. Your system needs to handle gameplay, screen recording, webcam input, audio processing, streaming software and live broadcasting simultaneously.
                  </p>
                  <p className="seo-p">
                    IT Fixer builds dedicated streaming PCs for YouTube, Twitch, gaming channels, online classes, podcasts and content creation setups across Chennai.
                  </p>
                  <p className="seo-p mb-0 mt-auto pt-3 border-top border-secondary border-opacity-10 text-white-50">
                    From budget creator PCs to high-end streaming rigs, we configure every streaming PC for Chennai creators — delivering stable FPS, fast encoding and smooth multitasking.
                  </p>
                </div>
              </div>

              <div className="col-12 col-md-6">
                <div className="feature-card benefits-panel d-flex flex-column h-100">
                  <h4 className="seo-h4 mt-0 text-brand">Editing PCs & Creator Setups</h4>
                  <p className="seo-p">
                    Good processing power, capable graphics, fast storage and reliable memory are all necessary for video editing, graphic design, animation, 3D work and professional content creation.
                  </p>
                  <p className="seo-p">
                    IT Fixer builds editing PCs suited for Adobe Premiere Pro, After Effects, Photoshop, DaVinci Resolve, Blender and other creative software.
                  </p>
                  <p className="seo-p mb-0 mt-auto pt-3 border-top border-secondary border-opacity-10 text-white-50">
                    Our builds are optimised for fast rendering, smooth timeline playback and long-term reliability. Whether you're editing reels, YouTube videos, wedding films, product shoots, corporate content or 4K projects, we help you choose a PC assembling solution in Chennai that keeps up with your creative workload without lag.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4: Store Locations & Upgrades Block */}
            <div className="trust-wrapper p-4 rounded-4 border border-secondary border-opacity-10 mb-5">
              <h2 className="seo-h2 mt-0 mb-3 text-center">
                Affordable Computer Store in Chennai for Gaming Laptops, PC Parts & Upgrade Support
              </h2>
              <p className="seo-p text-center mx-auto mb-4" style={{ maxWidth: "850px" }}>
                Beyond custom builds, IT Fixer supports customers looking for gaming laptops, creator laptops, graphics card upgrades, SSD upgrades, RAM upgrades, motherboard replacements & cooling improvements.
              </p>
              <p className="seo-p text-center mx-auto mb-4" style={{ maxWidth: "850px" }}>
                If your existing setup feels slow and hot or struggles with the latest games and software, an upgrade is often the better solution, not an unnecessary new machine.
              </p>
              <div className="trust-item justify-content-center text-center p-3 rounded-3 bg-black bg-opacity-20 text-white">
                🚀 IT Fixer has become a convenient computer store in chennai for students, gamers, freelancers, editors, designers & streamers in Ashok Nagar, Jafferkhanpet and across Chennai.
              </div>
            </div>

            {/* Section 5: Brand Trust & Professional Pitch */}
            <div className="row g-4 mb-5">
              <div className="col-12 col-md-6">
                <div className="feature-card highlight-panel d-flex flex-column h-100">
                  <h2 className="seo-h2 mt-0">Why Choose an IT Fixer?</h2>
                  <p className="seo-p">
                    Choosing the right gamer’s computer store in Chennai matters because performance depends on both component quality and technical know how. IT Fixer stands on genuine branded components, transparent configuration advice, warranty backed products and local, Chennai based service support you can actually walk into.
                  </p>
                  <p className="seo-p mb-0 mt-auto">
                    Our team explains what each component does and why it matters, so you understand exactly what you're paying for. From budget gaming PCs to high end creator setups, every system we build is powerful, stable, upgrade friendly and priced with real value in mind not just numbers on a spec sheet.
                  </p>
                </div>
              </div>

              <div className="col-12 col-md-6">
                <div className="feature-card highlight-panel d-flex flex-column h-100">
                  <h2 className="seo-h2 mt-0 text-white">
                    Expert Gaming pc builder in chennai for Gamers, Creators & Professionals
                  </h2>
                  <p className="seo-p">
                    A good PC shouldn't just look powerful. It should perform consistently, build after build. That's why IT Fixer focuses on real world results: gaming FPS, rendering speed, streaming stability, storage performance, cooling efficiency and upgrade flexibility, not just specifications on paper.
                  </p>
                  <p className="seo-p mb-0 mt-auto">
                    If you're searching for the best gaming, streaming and editing PC shop in Chennai, IT Fixer can help you build or upgrade a system built around your exact requirement.
                  </p>
                </div>
              </div>
            </div>

            {/* Final Footer Call to Action */}
            <div className="feature-card text-center p-4 border border-brand border-opacity-20" style={{ background: "rgba(198, 255, 0, 0.02)" }}>
              <h3 className="seo-h3 mt-0 mb-3 text-brand">Reasons to Visit the Top Computer Store in Chennai</h3>
              <p className="seo-p mb-0 mx-auto text-white" style={{ maxWidth: "800px" }}>
                Need help choosing the right gaming, streaming, editing PC’s or high performance laptop? Visit us or get in touch for expert guidance, custom PC builds, upgrades and reliable computer solutions in Chennai.
              </p>
            </div>
          </div>
        )}

        {/* Dynamic See More Content Section */}
        <div className="text-center mt-5">
          <button
            className="see-more-btn"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "See Less" : "See More"}
          </button>
        </div>

      </div>

      <style jsx>{`
        .itfixer-section {
          background-color: #080808;
          color: #f5f5f5;
          font-family: system-ui, -apple-system, sans-serif;
        }
        .max-w-xl { max-width: 768px; }
        .text-brand { color: #C6FF00; }
        
        .main-title {
          letter-spacing: -1px;
        }
        .brand-highlight {
          color: #C6FF00;
          text-shadow: 0 0 20px rgba(198, 255, 0, 0.2);
        }
        .subtitle-text {
          color: #a0a0a0;
          font-size: 1.125rem;
          line-height: 1.7;
        }
        .section-subtitle {
          color: #ffffff;
          font-weight: 700;
          letter-spacing: -0.5px;
        }

        /* Feature Cards */
        .feature-card {
          background: #121212;
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          padding: 24px;
          height: 100%;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .feature-card:hover {
          border-color: rgba(198, 255, 0, 0.4);
          background: #161616;
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4);
        }
        .icon-wrapper {
          color: #C6FF00;
          background: rgba(198, 255, 0, 0.06);
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          border: 1px solid rgba(198, 255, 0, 0.15);
        }
        .feature-text {
          font-size: 1.05rem;
          font-weight: 600;
          color: #e5e5e5;
        }

        /* Panels layout */
        .highlight-panel {
          background: linear-gradient(145deg, #121212 0%, #0d0d0d 100%);
          border: 1px solid rgba(198, 255, 0, 0.15);
        }
        .badge-tech {
          background: rgba(198, 255, 0, 0.1);
          color: #C6FF00;
          padding: 6px 12px;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 1px;
          border-radius: 20px;
          display: inline-block;
                }
        .panel-desc {
          color: #b0b0b0;
          line-height: 1.6;
        }
        .tag-cloud {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .tag-item {
          background: #181818;
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 6px 14px;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 500;
          color: #d0d0d0;
        }

        .benefits-panel {
          background: #121212;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .benefit-badge {
          background: #161616;
          border: 1px solid rgba(255, 255, 255, 0.03);
          padding: 12px 16px;
          border-radius: 10px;
          font-size: 0.9rem;
          font-weight: 500;
          display: flex;
          align-items: center;
          color: #e0e0e0;
        }

        /* Trust Box */
        .trust-wrapper {
          background: #0d0d0d;
          border: 1px solid rgba(255, 255, 255, 0.03);
        }
        .trust-item {
          display: flex;
          align-items: center;
          background: #121212;
          padding: 14px 20px;
          border-radius: 10px;
          font-size: 0.95rem;
          color: #d5d5d5;
          border: 1px solid rgba(255, 255, 255, 0.02);
        }

        /* See More Button Styling */
        .see-more-btn {
          background: #C6FF00;
          color: #000;
          border: none;
          padding: 12px 30px;
          font-size: 1rem;
          font-weight: 700;
          border-radius: 30px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(198, 255, 0, 0.2);
        }
        .see-more-btn:hover {
          background: #b2e600;
          transform: scale(1.05);
        }

        /* Expanded Content Styling - Fixed Layout */
        .seo-content-wrapper {
          background: #121212;
          border: 1px solid rgba(255, 255, 255, 0.05);
          text-align: left;
          width: 100%;
          max-width: 100%; /* Box constraint relaxed to full layout size */
          margin: 0 auto;
        }
        .seo-h1 { font-size: 1.75rem; color: #ffffff; margin-bottom: 1.25rem; font-weight: 700; }
        .seo-h2 { font-size: 1.4rem; color: #C6FF00; margin-top: 2rem; margin-bottom: 0.85rem; font-weight: 600; }
        .seo-h3 { font-size: 1.2rem; color: #ffffff; margin-top: 1.5rem; margin-bottom: 0.6rem; font-weight: 600; }
        .seo-h4 { font-size: 1.1rem; color: #ffffff; margin-top: 1.5rem; margin-bottom: 0.6rem; font-weight: 600; }
        .seo-p { color: #b0b0b0; font-size: 1rem; line-height: 1.7; margin-bottom: 1.25rem; }
        
        /* List padding layout fixes */
        .seo-list { 
          color: #b0b0b0; 
          font-size: 1rem; 
          line-height: 1.7; 
          margin-bottom: 1.25rem; 
          padding-left: 1.5rem; 
          list-style-type: disc; /* Bullet structure clear ah theriya */
        }
        .seo-list li { margin-bottom: 0.5rem; }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.4s ease-out forwards;
        }
          .border-brand {
  border-color: rgba(198, 255, 0, 0.4) !important;
}
.seo-hero-box {
  background: rgba(255, 255, 255, 0.01);
  box-shadow: inset 0 0 20px rgba(255,255,255,0.02);
}
.subtitle-lead {
  font-size: 1.05rem;
  color: #b8b8b8;
  line-height: 1.7;
}
.tracking-tight {
  letter-spacing: -0.5px;
}
      `}</style>
    </section>
  );
}