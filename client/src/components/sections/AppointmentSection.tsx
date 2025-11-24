import React, { useState } from 'react';
import { Phone } from 'lucide-react';
import FormInput from '../shared/FormInput';
import FormSelect from '../shared/FormSelect';
import FormDateInput from '../shared/FormDateInput';
import FormTextarea from '../shared/FormTextarea';
import FormButton from '../shared/FormButton';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const AppointmentSection: React.FC = () => {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.2 });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const typeOptions = [
    { value: '', label: 'Select Type' },
    { value: 'deluxe', label: 'Deluxe Room' },
    { value: 'suite', label: 'Suite Room' },
    { value: 'presidential', label: 'Presidential Suite' },
    { value: 'family', label: 'Family Room' }
  ];

  const roomOptions = [
    { value: '', label: 'Select Room' },
    { value: 'room-101', label: 'Room 101' },
    { value: 'room-102', label: 'Room 102' },
    { value: 'room-201', label: 'Room 201' },
    { value: 'room-202', label: 'Room 202' }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    alert('Appointment booked successfully!');
  };

  return (
    <section 
      ref={elementRef as React.RefObject<HTMLElement>}
      className="py-16 md:py-24 bg-[--green-light-100]"
    >
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div 
            className={`
              inline-block px-2 py-1 rounded mb-6 transition-all duration-1000 bg-white ease-[cubic-bezier(0.16,1,0.3,1)]
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
          >
            <p className="text-primary uppercase tracking-wider text-xs font-medium">
              STAY WITH US
            </p>
          </div>
          <h2 
            className={`
              text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900
              transition-all duration-1200 ease-[cubic-bezier(0.16,1,0.3,1)]
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
            `}
            style={{ transitionDelay: '100ms' }}
          >
            Make An Appointment
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Appointment Form */}
          <div 
            className={`
              lg:col-span-2 bg-white rounded-2xl p-6 md:p-8
              transition-all duration-1200 ease-[cubic-bezier(0.16,1,0.3,1)]
              ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}
            `}
            style={{ transitionDelay: '200ms' }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormInput
                  label="First Name"
                  type="text"
                  placeholder="Ex. first name"
                  required
                />
                <FormInput
                  label="Last Name"
                  type="text"
                  placeholder="Ex. last name"
                  required
                />
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormInput
                  label="Email"
                  type="email"
                  placeholder="Ex. info@domain.com"
                  required
                />
                <FormInput
                  label="Phone Number"
                  type="tel"
                  placeholder="Ex. (+1) 987 654 3210"
                  required
                />
              </div>

              {/* Select Type & Room */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormSelect
                  label="Select Type"
                  options={typeOptions}
                  required
                />
                <FormSelect
                  label="Select Room"
                  options={roomOptions}
                  required
                />
              </div>

              {/* Check In & Out */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormDateInput
                  label="Check In"
                  placeholder="Select date.."
                  required
                />
                <FormDateInput
                  label="Check Out"
                  placeholder="Select date.."
                  required
                />
              </div>

              {/* Message */}
              <FormTextarea
                label="Message"
                placeholder="Ex. type message"
                rows={5}
              />

              {/* Submit Button */}
              <div>
                <FormButton type="submit" isLoading={isSubmitting}>
                  Book Appointment
                </FormButton>
              </div>
            </form>
          </div>

          {/* Contact Card */}
          <div 
            className={`
              bg-primary rounded-2xl p-8 h-fit text-white
              transition-all duration-1200 ease-[cubic-bezier(0.16,1,0.3,1)]
              ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}
            `}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="space-y-6">
              {/* Image */}
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&h=400&fit=crop"
                  alt="Luxury hotel room"
                  className="w-full h-48 object-cover"
                />
              </div>

              {/* Phone Number */}
              <div className="text-center space-y-2">
                <h3 className="text-3xl md:text-4xl font-bold">
                  (+1) 987 654 3210
                </h3>
                <p className="text-white/90">Mon-Fri: 7:00 am - 9:00 pm</p>
                <p className="text-white/90 text-sm">24/7 Service Available</p>
              </div>

              {/* Call Button */}
              <div className="pt-4">
                <a
                  href="tel:+19876543210"
                  className="
                    group w-full flex items-center justify-center gap-2
                    px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg
                    hover:bg-yellow-300 transition-all duration-300
                    hover:shadow-lg hover:shadow-yellow-400/30
                  "
                >
                  Call Us Now
                  <Phone 
                    size={18} 
                    className="transition-transform duration-300 group-hover:rotate-12" 
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;
