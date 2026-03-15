// components/Contact.tsx
export default function Contact() {
    return (
      <section id="contact" className="py-24 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-sky-400 tracking-[3px] text-sm mb-6">GET IN TOUCH</div>
          <h2 className="text-5xl font-bold tracking-tighter mb-8">We’d love to hear from you</h2>
          
          <div className="max-w-md mx-auto space-y-8">
            <a href="mailto:avesha.2k26@gmail.com" className="block group">
              <div className="text-4xl font-semibold group-hover:text-sky-300 transition-colors">avesha.2k26@gmail.com</div>
            </a>
            
            <a href="tel:6380147100" className="block text-5xl font-bold tracking-tighter hover:text-sky-400 transition-colors">63801 47100</a>
          </div>
  
          <div className="mt-20 text-sm text-slate-400">
            University College of Engineering (BIT Campus)<br />
            Anna University, Tiruchirappalli, Tamil Nadu
          </div>
        </div>
      </section>
    );
  }