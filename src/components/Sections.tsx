import { Check, Star, TrendingUp, Clock, Award, Users, Smartphone, Lock, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export const Hero = () => {
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
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-gray-700 mb-6 font-medium"
        >
          Mesmo Sem Experiência Nenhuma na Cozinha
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
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
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button 
            onClick={() => {
              const element = document.getElementById('pricing');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="block w-full bg-green-600 hover:bg-green-700 text-white font-bold text-lg py-4 px-6 rounded-xl shadow-lg shadow-green-600/30 transition-all transform text-center cursor-pointer"
          >
            QUERO COMEÇAR AGORA POR R$10,00 →
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export const About = () => {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-md mx-auto">
        <div className="bg-amber-50 rounded-2xl p-6 shadow-sm border border-amber-100">
          <div className="flex flex-col items-center text-center">
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-md mb-6">
              <img 
                src="https://i.postimg.cc/SxWDW519/pudim-mulher.jpg" 
                alt="Lívia Silva" 
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold text-amber-900 mb-2">Oi! Eu sou a Lívia Silva</h2>
            <p className="text-amber-700 font-medium mb-4">Confeiteira Profissional</p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Tenho algo muito especial pra te mostrar. Se você quer começar o ano com renda própria — mas não sabe por onde começar — você está no lugar certo.
            </p>
            <p className="text-gray-700 leading-relaxed font-semibold">
              Eu criei o Método Pudim Lucrativo Sem Fogo: um guia completo DO zero até suas primeiras vendas!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export const VideoCarousel = () => {
  const videos = [
    "https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/videos%20croche/pudim-alunosvideo1.mp4",
    "https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/videos%20croche/pudim-alunosvideo2.mp4",
    "https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/videos%20croche/pudim-alunosvideo3.mp4",
    "https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/videos%20croche/pudim-alunosvideo4.mp4",
    "https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/videos%20croche/pudim-alunosvideo5.mp4",
    "https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/videos%20croche/pudim-alunosvideo6.mp4",
    "https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/videos%20croche/pudim-alunosvideo7.mp4",
    "https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/videos%20croche/pudim-alunosvideo8.mp4",
    "https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/videos%20croche/pudim-alunosvideo9.mp4"
  ];

  return (
    <section className="py-8 bg-amber-100 overflow-hidden">
      <div className="text-center mb-6 px-4">
        <h3 className="text-xl font-bold text-amber-900">Veja o resultado das alunas:</h3>
      </div>
      
      <div className="relative w-full flex overflow-x-hidden">
        <motion.div 
          className="flex gap-4 px-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            repeat: Infinity, 
            ease: "linear", 
            duration: 30 
          }}
          style={{ width: "max-content" }}
        >
          {[...videos, ...videos].map((src, index) => (
            <div key={index} className="w-40 h-72 shrink-0 rounded-xl overflow-hidden border-2 border-white shadow-md bg-black">
              <video 
                src={src} 
                className="w-full h-full object-cover"
                autoPlay 
                muted 
                loop 
                playsInline
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export const Benefits = () => {
  const benefits = [
    {
      title: "Pudins deliciosos sem fogo",
      desc: "Receitas que ficam prontas rapidinho e economizam gás.",
      icon: <Clock className="w-6 h-6 text-white" />,
      color: "bg-orange-500"
    },
    {
      title: "Precificação correta",
      desc: "Aprenda a cobrar do jeito certo pra lucrar mais em cada venda.",
      icon: <TrendingUp className="w-6 h-6 text-white" />,
      color: "bg-green-500"
    },
    {
      title: "Vendas rápidas",
      desc: "Técnicas para conquistar clientes fiéis logo no início.",
      icon: <Users className="w-6 h-6 text-white" />,
      color: "bg-blue-500"
    },
    {
      title: "Renda semanal",
      desc: "Estratégias simples pra gerar dinheiro toda semana.",
      icon: <Award className="w-6 h-6 text-white" />,
      color: "bg-purple-500"
    }
  ];

  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-2">O Que Você Vai Receber</h2>
        <p className="text-center text-gray-600 mb-8">Tudo passo a passo, pensado pra quem quer transformar a cozinha em fonte de renda.</p>
        
        <div className="space-y-4">
          {benefits.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-start gap-4"
            >
              <div className={`${item.color} p-3 rounded-lg shadow-sm shrink-0`}>
                {item.icon}
              </div>
              <div>
                <h3 className="font-bold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Simulation = () => {
  return (
    <section className="py-12 px-4 bg-amber-900 text-white">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-center mb-2">Veja Quanto Você Pode Faturar</h2>
        <p className="text-center text-amber-200 mb-8">Só com as vendas de Pudim na sua casa:</p>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 mb-6">
          <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-4">
            <span className="text-amber-200">Custo por pote:</span>
            <span className="font-bold">R$ 1,10 a R$ 1,50</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-green-300">Preço de venda:</span>
            <span className="font-bold text-xl">R$ 12,00 a R$ 15,00</span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-white text-gray-900 p-5 rounded-xl shadow-lg">
            <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
              <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded text-sm">Cenário 1</span>
              3 vendas por dia
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Vendas no mês:</span>
                <span className="font-medium">90 potes</span>
              </div>
              <div className="flex justify-between">
                <span>Faturamento:</span>
                <span className="font-medium">R$ 1.170,00</span>
              </div>
              <div className="flex justify-between text-red-500">
                <span>Custo total:</span>
                <span>~R$ 135,00</span>
              </div>
              <div className="pt-3 mt-2 border-t border-gray-100 flex justify-between items-center">
                <span className="font-bold text-gray-900">Lucro Líquido:</span>
                <span className="font-bold text-xl text-green-600">R$ 1.035/mês</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-white text-gray-900 p-5 rounded-xl shadow-lg border-2 border-green-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">META</div>
            <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Cenário 2</span>
              5 vendas por dia
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Vendas no mês:</span>
                <span className="font-medium">150 potes</span>
              </div>
              <div className="flex justify-between">
                <span>Faturamento:</span>
                <span className="font-medium">R$ 1.950,00</span>
              </div>
              <div className="flex justify-between text-red-500">
                <span>Custo total:</span>
                <span>~R$ 225,00</span>
              </div>
              <div className="pt-3 mt-2 border-t border-gray-100 flex justify-between items-center">
                <span className="font-bold text-gray-900">Lucro Líquido:</span>
                <span className="font-bold text-xl text-green-600">R$ 1.725/mês</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-amber-100 border-l-4 border-amber-500 p-4 rounded-r-lg shadow-md">
          <p className="text-center text-amber-900 text-lg font-bold uppercase leading-tight">
            ⚠️ Mais que um salário mínimo. <br/>Fazendo pudim. Em casa. Sem chefe!
          </p>
        </div>
      </div>
    </section>
  );
};

export const Bonuses = () => {
  const bonuses = [
    {
      id: 1,
      title: "Como vender Pudim com Grupos de Facebook",
      price: "De R$ 97 por GRÁTIS HOJE",
      desc: "(esse é o método que usamos para ter o WhatsApp lotado de pedidos todos os dias)",
      icon: <Users className="w-8 h-8 text-blue-600" />
    },
    {
      id: 2,
      title: "Script Pronto de Vendas no WhatsApp",
      price: "De R$ 97 por GRÁTIS HOJE",
      desc: "As mensagens exatas pra mandar pro vizinho, no grupo do comdominio ou grupo de família — e fechar a venda sem parecer chato",
      icon: <Smartphone className="w-8 h-8 text-green-500" />
    },
    {
      id: 3,
      title: "Calculadora de Lucro e Organização Financeira",
      price: "De R$ 97 por GRÁTIS HOJE",
      desc: "Descubra exatamente quanto você lucra em cada fornada antes de gastar R$1 e organize a sua vida financeira.",
      icon: <TrendingUp className="w-8 h-8 text-amber-500" />
    }
  ];

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <span className="bg-red-100 text-red-600 font-bold px-3 py-1 rounded-full text-sm uppercase tracking-wide">Oferta Especial</span>
          <h2 className="text-3xl font-extrabold text-gray-900 mt-2">BÔNUS HOJE</h2>
          <p className="text-gray-600 mt-2">Levando agora você garante esses presentes exclusivos:</p>
        </div>

        <div className="space-y-6">
          {bonuses.map((bonus) => (
            <div key={bonus.id} className="bg-gray-50 rounded-xl p-6 border border-gray-100 shadow-sm relative overflow-hidden group hover:border-amber-200 transition-colors">
              <div className="absolute top-0 right-0 bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg">
                GRÁTIS
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 bg-white p-3 rounded-lg shadow-sm h-fit">
                  {bonus.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg leading-tight mb-1">{bonus.title}</h3>
                  <p className="text-green-600 font-bold text-sm mb-2">{bonus.price}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{bonus.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Testimonials = () => {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-2">Elas Seguiram o Método</h2>
        <p className="text-center text-gray-600 mb-8">Veja o que está acontecendo com minhas alunas:</p>
        
        <div className="grid grid-cols-1 gap-4">
           {/* ConverteAI Video */}
           <div id="ifr_69a58916a414172eb5d3b526_wrapper" style={{ margin: '0 auto', width: '100%', maxWidth: '400px' }} className="mb-4">
             <div style={{ position: 'relative', padding: '177.77777777777777% 0 0 0' }} id="ifr_69a58916a414172eb5d3b526_aspect">
               <iframe 
                 frameBorder="0" 
                 allowFullScreen 
                 src="about:blank" 
                 id="ifr_69a58916a414172eb5d3b526" 
                 style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
                 referrerPolicy="origin" 
                 onLoad={(e) => {
                   const target = e.target as HTMLIFrameElement;
                   if (target.getAttribute('data-loaded')) return;
                   target.setAttribute('data-loaded', 'true');
                   target.src = 'https://scripts.converteai.net/ceaefeeb-feef-4b52-8911-9ec9de0d5b6b/players/69a58916a414172eb5d3b526/v4/embed.html' + (window.location.search || '?') + '&vl=' + encodeURIComponent(window.location.href);
                 }}
               ></iframe>
             </div>
           </div>

           {/* Placeholder for testimonials as requested */}
           <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
             <div className="flex items-center gap-2 mb-2">
               <div className="w-8 h-8 bg-amber-200 rounded-full flex items-center justify-center text-amber-800 font-bold text-xs">M</div>
               <span className="font-bold text-sm">Maria S.</span>
               <div className="flex text-amber-400 ml-auto">
                 <Star className="w-3 h-3 fill-current" />
                 <Star className="w-3 h-3 fill-current" />
                 <Star className="w-3 h-3 fill-current" />
                 <Star className="w-3 h-3 fill-current" />
                 <Star className="w-3 h-3 fill-current" />
               </div>
             </div>
             <p className="text-sm text-gray-600 italic">"Comecei semana passada e já vendi 20 potinhos! O método é muito simples de seguir."</p>
           </div>
           <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
             <div className="flex items-center gap-2 mb-2">
               <div className="w-8 h-8 bg-amber-200 rounded-full flex items-center justify-center text-amber-800 font-bold text-xs">J</div>
               <span className="font-bold text-sm">Joana P.</span>
               <div className="flex text-amber-400 ml-auto">
                 <Star className="w-3 h-3 fill-current" />
                 <Star className="w-3 h-3 fill-current" />
                 <Star className="w-3 h-3 fill-current" />
                 <Star className="w-3 h-3 fill-current" />
                 <Star className="w-3 h-3 fill-current" />
               </div>
             </div>
             <p className="text-sm text-gray-600 italic">"Nunca imaginei que pudim sem fogo ficasse tão bom. Meus clientes amam!"</p>
           </div>
        </div>
      </div>
    </section>
  );
};

export const Pricing = () => {
  return (
    <section id="pricing" className="py-12 px-4 bg-gray-50">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-2">Escolha Seu Plano</h2>
        <p className="text-center text-gray-600 mb-8">Comece hoje mesmo a mudar sua realidade financeira.</p>

        <div className="space-y-6">
          {/* Basic Plan */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 relative">
            <h3 className="text-lg font-bold text-gray-500 uppercase tracking-wide mb-2">Plano Básico</h3>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-gray-400 line-through text-sm">De R$ 97,00</span>
              <span className="text-3xl font-extrabold text-gray-900">R$ 10,90</span>
            </div>
            <p className="text-sm text-gray-500 mb-6">Pagamento único • Acesso vitalício</p>
            
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2 text-sm text-gray-700">
                <Check className="w-4 h-4 text-green-500 shrink-0" /> Método Pudim Lucrativo
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-700">
                <Check className="w-4 h-4 text-green-500 shrink-0" /> Certificado de Conclusão
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-700">
                <Check className="w-4 h-4 text-green-500 shrink-0" /> Entrega Imediata
              </li>
            </ul>

            <a 
              href="https://seguro.vitago-suplements.shop/r/P541CJOWPJ"
              className="block w-full bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-4 rounded-xl transition-colors text-center"
            >
              COMPRAR AGORA
            </a>
          </div>

          {/* Complete Plan */}
          <div className="bg-white rounded-2xl shadow-xl border-2 border-green-500 p-6 relative overflow-hidden transform scale-105">
            <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">MAIS VENDIDO</div>
            <h3 className="text-lg font-bold text-green-600 uppercase tracking-wide mb-2">Plano Completo</h3>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-gray-400 line-through text-sm">De R$ 197,00</span>
              <span className="text-4xl font-extrabold text-gray-900">R$ 19,90</span>
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
              href="https://seguro.vitago-suplements.shop/r/QJVM3HRCWZ"
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

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 px-4 text-center text-sm">
      <div className="max-w-md mx-auto">
        <p className="mb-4">© 2024 Método Pudim Lucrativo. Todos os direitos reservados.</p>
        <p className="text-xs text-gray-600">
          Os resultados podem variar de pessoa para pessoa. Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook.
        </p>
      </div>
    </footer>
  );
};
