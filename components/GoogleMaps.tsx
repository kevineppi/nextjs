const GoogleMaps = () => {
  return (
    <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2653.8!2d13.975!3d48.135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477cf3e813471d7f%3A0x738fc30c72669817!2sNegrellistra%C3%9Fe%2015%2C%204623%20Gunskirchen%2C%20Austria!5e0!3m2!1sen!2sat!4v1706800000000!5m2!1sen!2sat"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="ekdruck e.U. Standort - Negrellistraße 15, 4623 Gunskirchen"
      />
    </div>
  );
};

export default GoogleMaps;