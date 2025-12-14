import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function YatraServices() {
  const services = [
    {
      id: 1,
      title: 'Adventure',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80',
      link: '#'
    },
    {
      id: 2,
      title: 'MICE',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
      link: '#'
    },
    {
      id: 3,
      title: 'Cruise',
      image: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=800&q=80',
      link: '#'
    },
    {
      id: 4,
      title: 'Villas & Stays',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80',
      link: '#'
    },
    {
      id: 5,
      title: 'Luxury Trains',
      image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800&q=80',
      link: '#'
    },
    {
      id: 6,
      title: 'Monuments',
      image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&q=80',
      link: '#'
    },
    {
      id: 7,
      title: 'Activites',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
      link: '#'
    },
    {
      id: 8,
      title: 'Gift Voucher',
      image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=800&q=80',
      link: '#'
    },
    {
      id: 9,
      title: 'Visa',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80',
      link: '#'
    },
    {
      id: 10,
      title: 'Freight',
      image: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&q=80',
      link: '#'
    }
  ];

  return (
    <div className="w-[95%] mx-auto mt-10 bg-white rounded-2xl py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Yatra's Other Services
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <a
              key={service.id}
              href={service.link}
              className="group relative h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="absolute inset-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent"></div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <div className="flex items-center gap-2 text-sm group-hover:gap-3 transition-all duration-300">
                  <span>Plan my Trip</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 rounded-2xl transition-all duration-300"></div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}