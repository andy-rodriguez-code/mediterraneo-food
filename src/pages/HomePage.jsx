import React from 'react';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import Button from '../components/Button';
import Section from '../components/Section';

const HomePage = () => {
  const navLinks = [
    { text: 'Home', href: '#', active: true },
    { text: 'Blog', href: '#', active: false },
    { text: 'Contact Us', href: '#', active: false },
    { text: 'Services', href: '#', active: false }
  ];

  const products = [
    { name: 'Whole Grain Bread', price: 40, image: '/images/product1.jpg' },
    { name: 'Croissant', price: 35, image: '/images/product2.jpg' },
    { name: 'Chocolate Cake', price: 45, image: '/images/product3.jpg' },
    { name: 'Blueberry Muffin', price: 25, image: '/images/product4.jpg' },
    { name: 'Fruit Tart', price: 30, image: '/images/product5.jpg' },
    { name: 'Baguette', price: 20, image: '/images/product6.jpg' }
  ];

  return (
    <div className="max-w-[1440px] mx-auto">
      <Navbar 
        logo="/logo.png" 
        links={navLinks}
        ctaButton={{ text: 'Shop Now' }}
      />

      <Section bgImage="/hero-bg.jpg" className="h-[800px] flex flex-col justify-center pl-24 text-gray-100">
        <h1 className="font-['Sansita_Swashed'] text-7xl font-normal leading-[1.2]">
          Sweet Treats,<br />Perfect Eats
        </h1>
        <p className="font-['Inter'] text-2xl font-semibold text-amber-300 my-5">
          Delicious Cafe
        </p>
        <Button variant="outline" className="flex items-center gap-2">
          Learn More
        </Button>
      </Section>

      <Section className="py-20 px-10 text-center">
        <h2 className="font-['Sansita_Swashed'] text-6xl font-semibold text-gray-900 mb-16">
          Top Products
        </h2>
        <div className="grid grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </Section>

      <Section bgImage="/promo-bg.jpg" className="py-24 px-10 text-center">
        <h3 className="font-['Sansita_Swashed'] text-5xl font-medium">
          20% Off Your First Order
        </h3>
        <p className="font-['Inter'] text-2xl font-normal my-4">
          Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibenjgg.
        </p>
        <Button>Learn More</Button>
      </Section>

      <Section bgImage="/about-bg.jpg" className="py-24 px-10">
        <h2 className="font-['Sansita_Swashed'] text-5xl font-semibold">
          About us
        </h2>
        <p className="font-['Inter'] text-2xl font-normal text-gray-400 my-4">
          Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis.
        </p>
        <Button>Read More</Button>
      </Section>

      <Section bgImage="/footer-bg.jpg">
        <div className="max-w-7xl mx-auto py-16 px-10 grid grid-cols-4 gap-8">
          <div className="footer-logo">
            <img src="/logo.png" alt="Delicious Cafe Logo" className="h-12" />
          </div>
          <div className="footer-links">
            <h4 className="font-['Inter'] text-3xl font-bold text-amber-300">Explore</h4>
            {navLinks.map((link, index) => (
              <a key={index} href={link.href} className="block text-gray-100 text-xl font-medium mt-4">
                {link.text}
              </a>
            ))}
          </div>
          <div className="footer-contact">
            <h4 className="font-['Inter'] text-3xl font-bold text-amber-300">About Us</h4>
            <p className="text-gray-100 text-xl font-medium mt-4">(456) 789-12301</p>
            <p className="text-gray-100 text-xl font-medium mt-2">info@modrino.co.uk</p>
            <p className="text-gray-100 text-xl font-medium mt-2">South 13th street</p>
            <p className="text-gray-100 text-xl font-medium mt-2">New york America</p>
          </div>
          <div className="footer-news">
            <h4 className="font-['Inter'] text-3xl font-bold text-amber-300">Recent News</h4>
            <p className="text-gray-100 text-xl font-medium mt-4">Puff pastry bliss.</p>
            <small className="text-amber-300 text-lg font-normal">June 14,2024</small>
            <p className="text-gray-100 text-xl font-medium mt-4">Puff pastry bliss.</p>
            <small className="text-amber-300 text-lg font-normal">June 14,2024</small>
          </div>
        </div>
        <div className="text-center py-8">
          <p className="text-gray-500 text-xl font-semibold">
            © 2024 Bake House. All rights reserved
          </p>
        </div>
      </Section>
    </div>
  );
};

export default HomePage;