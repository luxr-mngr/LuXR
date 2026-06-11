import React from "react";
import { motion } from "framer-motion";
import pucpLogo from "../assets/marcas/PUCP.png";
import depaing from "../assets/marcas/DepartamentoING.svg";
import culturales from "../assets/marcas/culturales.png";
import yuyay from "../assets/marcas/yuyay.png";

// ─── Para reemplazar un logo: añade la ruta en el campo `logo` ───────────────
// Ejemplo: { name: 'Mi Empresa', logo: '/logos/miempresa.png', ... }
// Si `logo` está vacío se muestra el placeholder de color.
// ─────────────────────────────────────────────────────────────────────────────
const brands = [
    {
        name: "PUCP",
        logo: pucpLogo,
        initials: "TC",
        color: "from-blue-500 to-blue-700",
    },
    {
        name: "Dirección de Asuntos Culturales",
        logo: culturales,
        initials: "IN",
        color: "from-indigo-500 to-indigo-700",
    },
    {
        name: "Departamento Académico de Ingeniería",
        logo: depaing,
        initials: "NL",
        color: "from-violet-500 to-violet-700",
    },
    {
        name: "Yuyay",
        logo: yuyay,
        initials: "AX",
        color: "from-sky-500 to-sky-700",
    },
];

const doubled = [...brands, ...brands];

const edgeMask = {
    maskImage:
        "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
    WebkitMaskImage:
        "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
};

interface Brand {
    name: string;
    logo: string;
    initials: string;
    color: string;
}

const BrandCard = ({ brand }: { brand: Brand }) => (
    <div className="flex flex-col items-center gap-5 px-8 py-8 rounded-3xl bg-white/5 border border-white/10 shrink-0 group hover:bg-white/10 hover:border-[#18d185]/40 transition-all duration-300 cursor-default w-[280px] sm:w-[320px] md:w-[360px]">
        {/* Logo area */}
        <div className="w-full h-32 sm:h-36 md:h-40 flex items-center justify-center rounded-2xl overflow-hidden bg-white/5">
            {brand.logo ? (
                <img
                    src={brand.logo}
                    alt={brand.name}
                    className="w-full h-full object-contain p-4"
                />
            ) : (
                <div
                    className={`w-full h-full bg-gradient-to-br ${brand.color} flex items-center justify-center`}
                >
                    <span className="text-white font-black text-3xl">
                        {brand.initials}
                    </span>
                </div>
            )}
        </div>
        <span className="text-white/50 font-bold text-sm group-hover:text-white/90 transition-colors duration-300 whitespace-nowrap tracking-wide">
            {brand.name}
        </span>
    </div>
);

export const Brands = () => {
    return (
        <section
            id="clientes"
            className="relative min-h-screen flex flex-col items-center justify-center bg-slate-950 overflow-hidden py-24"
        >
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    className="absolute top-1/3 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px]"
                    animate={{ scale: [1, 1.2, 1], x: [0, 40, 0] }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#18d185]/8 rounded-full blur-[120px]"
                    animate={{ scale: [1, 1.3, 1], x: [0, -40, 0] }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />
            </div>

            <div className="relative z-10 w-full flex flex-col items-center gap-20">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center px-6"
                >
                    <span className="text-[#18d185] font-bold uppercase tracking-[0.4em] text-xs mb-6 italic block">
                        Clientes
                    </span>
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6">
                        Ya trabajan
                        <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-[#18d185]">
                            con nosotros
                        </span>
                    </h3>
                    <p className="text-slate-400 font-medium text-lg max-w-xl mx-auto">
                        Un grupo selecto de empresas que apuestan por tecnología
                        bien hecha.
                    </p>
                </motion.div>

                {/* Carrusel */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full overflow-hidden"
                    style={edgeMask}
                >
                    <motion.div
                        className="flex gap-6 w-max"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            duration: 40,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    >
                        {doubled.map((brand, i) => (
                            <BrandCard key={i} brand={brand} />
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};
