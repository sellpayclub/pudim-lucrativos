import { Check, Clock, Smartphone, Lock, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export const HeroV2 = () => {
  return (
    <section className="relative bg-gradient-to-b from-amber-50 to-white py-12 px-4 overflow-hidden">
      <div className="max-w-md mx-auto text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex justify-center"
        >
          <img 
            src="https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/videos%20croche/LOGO%20pudim.png" 
            alt="Logo Pudim Lucrativo" 
            className="h-32 object-contain drop-shadow-md"
          />
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl font-extrabold text-amber-900 leading-tight mb-4"
        >
          Aprenda a Fazer Pudim Sem Fogo e Comece a Faturar de <span className="text-green-600">R$100 a R$300 por Dia</span>
        </motion.h1>

        {/* VSL Video */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-6"
        >
          <div id="ifr_69a7869a5a70781128b6f34c_wrapper" style={{ margin: '0 auto', width: '100%', maxWidth: '400px' }}>
            <div style={{ position: 'relative', padding: '100% 0 0 0' }} id="ifr_69a7869a5a70781128b6f34c_aspect">
              <iframe 
                frameBorder="0" 
                allowFullScreen 
                src="about:blank" 
                id="ifr_69a7869a5a70781128b6f34c" 
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
                referrerPolicy="origin" 
                onLoad={(e) => {
                  const target = e.target as HTMLIFrameElement;
                  if (target.getAttribute('data-loaded')) return;
                  target.setAttribute('data-loaded', 'true');
                  target.src = 'https://scripts.converteai.net/ceaefeeb-feef-4b52-8911-9ec9de0d5b6b/players/69a7869a5a70781128b6f34c/v4/embed.html' + (window.location.search || '?') + '&vl=' + encodeURIComponent(window.location.href);
                }}
              ></iframe>
            </div>
          </div>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg text-gray-700 mb-6 font-medium"
        >
          Mesmo Sem Experiência Nenhuma na Cozinha
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 text-sm text-gray-600 mb-8"
        >
          <span className="flex items-center gap-1 bg-white px-3 py-1 rounded-full shadow-sm border border-amber-100">
            <Clock className="w-4 h-4 text-amber-500" /> Entrega imediata
          </span>
          <span className="flex items-center gap-1 bg-white px-3 py-1 rounded-full shadow-sm border border-amber-100">
            <Lock className="w-4 h-4 text-amber-500" /> Acesso vitalício
          </span>
          <span className="flex items-center gap-1 bg-white px-3 py-1 rounded-full shadow-sm border border-amber-100">
            <Smartphone className="w-4 h-4 text-amber-500" /> Funciona pelo celular
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button 
            onClick={() => {
              const element = document.getElementById('pricing-v2');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="block w-full bg-green-600 hover:bg-green-700 text-white font-bold text-lg py-4 px-6 rounded-xl shadow-lg shadow-green-600/30 transition-all transform text-center cursor-pointer"
          >
            QUERO COMEÇAR AGORA POR R$49,90 →
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export const PricingV2 = () => {
  return (
    <section id="pricing-v2" className="py-12 px-4 bg-gray-50">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-2">Escolha Seu Plano</h2>
        <p className="text-center text-gray-600 mb-8">Comece hoje mesmo a mudar sua realidade financeira.</p>

        <div className="space-y-6">
          {/* Complete Plan Only */}
          <div className="bg-white rounded-2xl shadow-xl border-2 border-green-500 p-6 relative overflow-hidden transform scale-105">
            <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">MAIS VENDIDO</div>
            <h3 className="text-lg font-bold text-green-600 uppercase tracking-wide mb-2">Plano Completo</h3>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-gray-400 line-through text-sm">De R$ 197,00</span>
              <span className="text-4xl font-extrabold text-gray-900">R$ 49,90</span>
            </div>
            <p className="text-sm text-gray-500 mb-6">Pagamento único • Acesso vitalício</p>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-2 text-sm font-bold text-gray-900">
                <Check className="w-5 h-5 text-green-500 shrink-0" /> Método Pudim Lucrativo
              </div>
              <div className="text-xs font-bold text-gray-500 uppercase mt-4 mb-2">Bônus Exclusivos:</div>
              <li className="flex items-center gap-2 text-sm text-gray-700">
                <Check className="w-4 h-4 text-green-500 shrink-0" /> Método de Vendas no WhatsApp
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-700">
                <Check className="w-4 h-4 text-green-500 shrink-0" /> Vendas em Grupos do Facebook
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-700">
                <Check className="w-4 h-4 text-green-500 shrink-0" /> Aulas ao vivo para dúvidas
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-700">
                <Check className="w-4 h-4 text-green-500 shrink-0" /> Grupo VIP das alunas
              </li>
            </div>

            <a 
              href="https://seguro.vitago-suplements.shop/r/R5V8PEZ90G"
              className="block w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-4 rounded-xl shadow-lg shadow-green-600/20 transition-all transform hover:scale-105 flex items-center justify-center gap-2 text-center"
            >
              COMPRAR AGORA <ArrowRight className="w-5 h-5" />
            </a>
            
            <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500">
              <Lock className="w-3 h-3" /> Pagamento 100% Seguro
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
