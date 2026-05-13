import Button from './Button';
import Icon from './Icon';

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado con éxito");
  };

  return (
    <div className="bg-border-custom/30 p-8 md:p-12 rounded-3xl border border-white/5 shadow-2xl space-y-10">
      <form onSubmit={handleSubmit} className="space-y-10">
        
        {/* Fila superior: Identity y E-mail */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Campo IDENTITY */}
          <div className="space-y-3">
            <label htmlFor="identity" className="text-[10px] font-bold text-primary uppercase tracking-widest font-spline">
              IDENTITY
            </label>
            <input
              type="text"
              id="identity"
              name="identity"
              placeholder="FULL NAME"
              required
              className="w-full bg-bg rounded-xl border border-white/10 py-4 px-5 text-text placeholder-gris/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-vietnam"
            />
          </div>

          {/* Campo E-MAIL */}
          <div className="space-y-3">
            <label htmlFor="email" className="text-[10px] font-bold text-primary uppercase tracking-widest font-spline">
              E-MAIL
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="EMAIL ADDRESS"
              required
              className="w-full bg-bg rounded-xl border border-white/10 py-4 px-5 text-text placeholder-gris/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-vietnam"
            />
          </div>
        </div>

        {/* Campo MESSAGE */}
        <div className="space-y-3">
          <label htmlFor="message" className="text-[10px] font-bold text-primary uppercase tracking-widest font-spline">
            MESSAGE
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="HOW CAN WE ASSIST YOUR CINEPHILE EXPERIENCE?"
            rows="5"
            required
            className="w-full bg-bg rounded-xl border border-white/10 py-4 px-5 text-text placeholder-gris/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none font-vietnam"
          ></textarea>
        </div>

        {/* Pie del formulario: Seguridad y Botón */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-4">
          
          {/* Indicador de seguridad */}
          <div className="flex items-center space-x-3 text-gris">
            <Icon 
              icon="fa-solid fa-shield-halved" 
              className="text-sm opacity-60" 
            />
            <span className="text-[10px] uppercase tracking-[0.15em] font-bold font-spline">
              END-TO-END SECURE
            </span>
          </div>

          {/* Botón de envío usando tu componente Button */}
          <Button 
            type="submit" 
            variant="primary" 
            size="lg"
            className="w-full md:w-auto"
          >
            SEND
          </Button>
        </div>

      </form>
    </div>
  );
};

export default ContactForm;