import { FileText, PlayCircle, AlertCircle, Download } from 'lucide-react';
import { motion } from 'motion/react';

export default function DeliveryPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 font-sans text-gray-900">
      <div className="max-w-2xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden"
        >
          <div className="bg-amber-500 p-8 text-center">
            <h1 className="text-3xl font-extrabold text-white mb-2 drop-shadow-sm">
              Área de Membros
            </h1>
            <p className="text-amber-50 font-medium">
              Acesse todo o seu material abaixo
            </p>
          </div>

          <div className="p-8 space-y-8">
            {/* Video Lessons Section */}
            <div className="bg-amber-50 rounded-xl p-6 border border-amber-100">
              <div className="flex items-center gap-3 mb-4">
                <PlayCircle className="w-8 h-8 text-amber-600" />
                <h2 className="text-xl font-bold text-amber-900">Aulas em Vídeo</h2>
              </div>
              <p className="text-gray-700 mb-4">
                🎥 Aqui vão também as aulas em vídeo das receitas:
                <br /><br />
                Se não conseguir visualizar aqui no WhatsApp as Receitas, clique no link abaixo que abre em qualquer celular sem problemas!
              </p>
              <a 
                href="https://drive.google.com/drive/folders/1MwYjgQIQmHi_hsNm8I9vWyu-w6n_wCr6"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-6 rounded-xl transition-colors shadow-md shadow-amber-600/20"
              >
                <PlayCircle className="w-5 h-5" />
                ACESSAR AULAS EM VÍDEO
              </a>
            </div>

            {/* PDFs Section */}
            <div className="bg-red-50 rounded-xl p-6 border border-red-100">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-8 h-8 text-red-600" />
                <h2 className="text-xl font-bold text-red-900">Apostilas em PDF</h2>
              </div>
              
              <div className="flex items-start gap-3 mb-6 bg-white p-4 rounded-lg border border-red-100">
                <AlertCircle className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
                <p className="text-sm text-gray-700 font-medium">
                  🚨 Se estiver com dificuldade para abrir as receitas por aqui, é só usar o link abaixo. No link elas vão abrir sem nenhum problema.
                </p>
              </div>

              <a 
                href="https://drive.google.com/drive/folders/16NIxp3uZ2D7RVdNz-p0ULaOL2rY9d11G?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-xl transition-colors shadow-md shadow-red-600/20"
              >
                <Download className="w-5 h-5" />
                BAIXAR APOSTILAS EM PDF
              </a>
            </div>
            
            <div className="text-center text-sm text-gray-500 mt-8 pt-8 border-t border-gray-100">
              <p>Parabéns por dar esse passo! Desejamos muito sucesso nas suas vendas.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
