export default function Awards() {
    return (
        <div className="bg-white px-6 sm:px-16 lg:px-20 py-12">
            {/* Grid Layout for 3 Sections */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-left w-full">
                
                {/* Member of Section */}
                <div className="w-full">
                    <h3 className="text-gray-500 text-lg font-semibold uppercase mb-4">
                        Member of
                    </h3>
                    <div className="flex flex-wrap justify-start gap-4">
                        <img src="/appa.svg" alt="APPA" className="h-12" />
                        <img src="/ppai.png" alt="PPAI" className="h-12" />
                        <img src="/letsencrypt.svg" alt="Let's Encrypt" className="h-8" />
                    </div>
                </div>

                {/* Proudly Climate Positive */}
                <div className="w-full">
                    <h3 className="text-gray-500 text-lg font-semibold uppercase mb-4">
                        Proudly Climate Positive
                    </h3>
                    <div className="flex flex-wrap justify-start gap-4">
                        <img src="/sedex.png" alt="Sedex Member" className="h-8" />
                    </div>
                </div>

                {/* 2022 APPA Winner */}
                <div className="w-full">
                    <h3 className="text-gray-500 text-lg font-semibold uppercase mb-4">
                        2022 APPA Winner
                    </h3>
                    <img src="/awards.png" alt="APPA Award Winner" className="h-16" />
                </div>

            </div>
        </div>
    );
}
