import React from 'react';

const HomePage = () => {
  return (
    <div className="0">
  
     <section class="hero-bg text-white py-20 md:py-32">
        <div class="container mx-auto px-4">
            <div class="max-w-2xl mx-auto text-center">
                <h1 class="text-4xl md:text-5xl font-bold mb-6">Réservez Votre Séjour Parfait en Chine</h1>
                <p class="text-lg md:text-xl mb-8">Votre plateforme de confiance pour trouver les meilleurs hébergements en Chine. Découvrez des chambres exceptionnelles et des séjours mémorables.</p>
                <div class="flex flex-col sm:flex-row justify-center gap-4">
                    <a href="#hotels" class="bg-primary hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
                        Voir Nos Hôtels
                    </a>
                    <a href="#contact" class="bg-white hover:bg-gray-100 text-primary font-bold py-3 px-6 rounded-lg transition duration-300">
                        Réserver Maintenant
                    </a>
                </div>
            </div>
        </div>
    </section>

     <section id="services" class="py-16 bg-white">
        <div class="container mx-auto px-4">
            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-4xl font-bold text-secondary mb-4">Nos Services pour un Séjour Inoubliable</h2>
                <p class="text-gray-600 max-w-3xl mx-auto">Nous offrons une gamme complète de services pour faciliter votre voyage en Chine.</p>
            </div>
            
            <div class="grid md:grid-cols-2 gap-8">
                 <div class="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <div class="flex items-center mb-4">
                        <div class="bg-primary rounded-full p-3 mr-4">
                            <i class="fas fa-hotel text-white text-xl"></i>
                        </div>
                        <h3 class="text-xl font-bold text-secondary">Réservation d'Hôtels</h3>
                    </div>
                    
                    <div class="space-y-4">
                        <div class="service-card bg-white p-4 rounded-lg shadow-sm">
                            <div class="flex items-start">
                                <i class="fas fa-bed text-accent text-xl mt-1 mr-3"></i>
                                <div>
                                    <h4 class="font-semibold text-gray-800">Chambres Premium</h4>
                                    <p class="text-gray-600">Large sélection de chambres confortables dans les meilleurs hôtels à travers la Chine.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="service-card bg-white p-4 rounded-lg shadow-sm">
                            <div class="flex items-start">
                                <i class="fas fa-percentage text-accent text-xl mt-1 mr-3"></i>
                                <div>
                                    <h4 class="font-semibold text-gray-800">Meilleur Prix Garanti</h4>
                                    <p class="text-gray-600">Nous garantissons les tarifs les plus compétitifs pour votre hébergement.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="service-card bg-white p-4 rounded-lg shadow-sm">
                            <div class="flex items-start">
                                <i class="fas fa-utensils text-accent text-xl mt-1 mr-3"></i>
                                <div>
                                    <h4 class="font-semibold text-gray-800">Petit-Déjeuner Inclus</h4>
                                    <p class="text-gray-600">De nombreuses options avec petit-déjeuner buffet inclus.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                 <div class="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <div class="flex items-center mb-4">
                        <div class="bg-primary rounded-full p-3 mr-4">
                            <i class="fas fa-concierge-bell text-white text-xl"></i>
                        </div>
                        <h3 class="text-xl font-bold text-secondary">Services Complémentaires</h3>
                    </div>
                    
                    <div class="space-y-4">
                        <div class="service-card bg-white p-4 rounded-lg shadow-sm">
                            <div class="flex items-start">
                                <i class="fas fa-car text-accent text-xl mt-1 mr-3"></i>
                                <div>
                                    <h4 class="font-semibold text-gray-800">Transfert Aéroport</h4>
                                    <p class="text-gray-600">Service de navette privée depuis et vers l'aéroport.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="service-card bg-white p-4 rounded-lg shadow-sm">
                            <div class="flex items-start">
                                <i class="fas fa-map-marked-alt text-accent text-xl mt-1 mr-3"></i>
                                <div>
                                    <h4 class="font-semibold text-gray-800">Visites Guidées</h4>
                                    <p class="text-gray-600">Excursions et visites culturelles organisées.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="service-card bg-white p-4 rounded-lg shadow-sm">
                            <div class="flex items-start">
                                <i class="fas fa-language text-accent text-xl mt-1 mr-3"></i>
                                <div>
                                    <h4 class="font-semibold text-gray-800">Assistance Francophone</h4>
                                    <p class="text-gray-600">Service client disponible en français 24h/24.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

     <section id="hotels" class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-4xl font-bold text-secondary mb-4">Nos Hôtels Partenaires</h2>
                <p class="text-gray-600 max-w-3xl mx-auto">Découvrez quelques-uns des meilleurs hôtels que nous proposons.</p>
            </div>
            
            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                 <div class="hotel-card bg-white rounded-xl overflow-hidden shadow-md transition duration-300">
                    <div class="h-48 bg-blue-50 flex items-center justify-center">
                        <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Hôtel de Luxe" class="h-full w-full object-cover" />
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold text-secondary mb-2">Hôtel Imperial</h3>
                        <p class="text-gray-600 mb-3">Hôtel 5 étoiles au cœur de Pékin avec spa et piscine intérieure.</p>
                        <div class="flex justify-between items-center">
                            <span class="font-bold text-primary">À partir de 120€/nuit</span>
                            <a href="#" class="text-primary hover:underline">Voir disponibilités</a>
                        </div>
                    </div>
                </div>
                
                 <div class="hotel-card bg-white rounded-xl overflow-hidden shadow-md transition duration-300">
                    <div class="h-48 bg-red-50 flex items-center justify-center">
                        <img src="https://images.unsplash.com/photo-1535827841776-24afc1e255ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Hôtel Moderne" class="h-full w-full object-cover" />
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold text-secondary mb-2">Shanghai Riviera</h3>
                        <p class="text-gray-600 mb-3">Hôtel design avec vue imprenable sur le Bund et restaurants gastronomiques.</p>
                        <div class="flex justify-between items-center">
                            <span class="font-bold text-primary">À partir de 95€/nuit</span>
                            <a href="#" class="text-primary hover:underline">Voir disponibilités</a>
                        </div>
                    </div>
                </div>
                
                 <div class="hotel-card bg-white rounded-xl overflow-hidden shadow-md transition duration-300">
                    <div class="h-48 bg-green-50 flex items-center justify-center">
                        <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Hôtel Traditionnel" class="h-full w-full object-cover" />
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold text-secondary mb-2">Suzhou Garden</h3>
                        <p class="text-gray-600 mb-3">Hôtel traditionnel chinois avec jardins paysagers et architecture Ming.</p>
                        <div class="flex justify-between items-center">
                            <span class="font-bold text-primary">À partir de 75€/nuit</span>
                            <a href="#" class="text-primary hover:underline">Voir disponibilités</a>
                        </div>
                    </div>
                </div>
                
                 <div class="hotel-card bg-white rounded-xl overflow-hidden shadow-md transition duration-300">
                    <div class="h-48 bg-yellow-50 flex items-center justify-center">
                        <img src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Hôtel Affaires" class="h-full w-full object-cover" />
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold text-secondary mb-2">Guangzhou Business</h3>
                        <p class="text-gray-600 mb-3">Hôtel d'affaires moderne avec centre de conférence haut de gamme.</p>
                        <div class="flex justify-between items-center">
                            <span class="font-bold text-primary">À partir de 65€/nuit</span>
                            <a href="#" class="text-primary hover:underline">Voir disponibilités</a>
                        </div>
                    </div>
                </div>
                
                 <div class="hotel-card bg-white rounded-xl overflow-hidden shadow-md transition duration-300">
                    <div class="h-48 bg-purple-50 flex items-center justify-center">
                        <img src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Hôtel Plage" class="h-full w-full object-cover" />
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold text-secondary mb-2">Hainan Paradise</h3>
                        <p class="text-gray-600 mb-3">Complexe balnéaire avec plage privée et centre de thalassothérapie.</p>
                        <div class="flex justify-between items-center">
                            <span class="font-bold text-primary">À partir de 150€/nuit</span>
                            <a href="#" class="text-primary hover:underline">Voir disponibilités</a>
                        </div>
                    </div>
                </div>
                
                 <div class="hotel-card bg-white rounded-xl overflow-hidden shadow-md transition duration-300 flex items-center justify-center">
                    <div class="p-6 text-center">
                        <div class="bg-primary rounded-full p-4 inline-block mb-4">
                            <i class="fas fa-plus text-white text-2xl"></i>
                        </div>
                        <h3 class="text-xl font-bold text-secondary mb-2">Et Bien Plus Encore</h3>
                        <p class="text-gray-600 mb-4">Nous proposons plus de 200 hôtels à travers toute la Chine.</p>
                        <a href="#contact" class="inline-block bg-primary hover:bg-red-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300">
                            Nous Contacter
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

     <section class="py-16 bg-white">
        <div class="container mx-auto px-4">
            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-4xl font-bold text-secondary mb-4">Pourquoi Choisir Notre Plateforme ?</h2>
                <p class="text-gray-600 max-w-3xl mx-auto">Nous nous engageons à fournir les meilleurs services pour garantir la réussite de votre voyage.</p>
            </div>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                 <div class="bg-gray-50 rounded-xl p-6 text-center">
                    <div class="bg-primary bg-opacity-10 rounded-full p-4 inline-block mb-4">
                        <i class="fas fa-check-circle text-primary text-2xl"></i>
                    </div>
                    <h3 class="text-xl font-bold text-secondary mb-2">Réservation Instantanée</h3>
                    <p class="text-gray-600">Confirmation immédiate de votre réservation sans attente.</p>
                </div>
                
                 <div class="bg-gray-50 rounded-xl p-6 text-center">
                    <div class="bg-primary bg-opacity-10 rounded-full p-4 inline-block mb-4">
                        <i class="fas fa-euro-sign text-primary text-2xl"></i>
                    </div>
                    <h3 class="text-xl font-bold text-secondary mb-2">Meilleur Prix</h3>
                    <p class="text-gray-600">Garantie du prix le plus bas pour votre hébergement.</p>
                </div>
                
                 <div class="bg-gray-50 rounded-xl p-6 text-center">
                    <div class="bg-primary bg-opacity-10 rounded-full p-4 inline-block mb-4">
                        <i class="fas fa-user-shield text-primary text-2xl"></i>
                    </div>
                    <h3 class="text-xl font-bold text-secondary mb-2">Annulation Gratuite</h3>
                    <p class="text-gray-600">Annulation sans frais jusqu'à 24h avant l'arrivée.</p>
                </div>
                
                 <div class="bg-gray-50 rounded-xl p-6 text-center">
                    <div class="bg-primary bg-opacity-10 rounded-full p-4 inline-block mb-4">
                        <i class="fas fa-headset text-primary text-2xl"></i>
                    </div>
                    <h3 class="text-xl font-bold text-secondary mb-2">Assistance 24/7</h3>
                    <p class="text-gray-600">Service client disponible à tout moment pour vous aider.</p>
                </div>
            </div>
        </div>
    </section>

     <section id="testimonials" class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-4xl font-bold text-secondary mb-4">Témoignages de Nos Clients</h2>
                <p class="text-gray-600 max-w-3xl mx-auto">Découvrez ce que nos clients disent de leur expérience.</p>
            </div>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                 <div class="testimonial-card bg-white rounded-xl p-6 shadow-sm">
                    <div class="flex items-center mb-4">
                        <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Client" class="w-12 h-12 rounded-full object-cover mr-4" />
                        <div>
                            <h4 class="font-bold text-gray-800">Sophie Martin</h4>
                            <p class="text-gray-500 text-sm">Séjour à Shanghai</p>
                        </div>
                    </div>
                    <p class="text-gray-600 mb-4">"La réservation était très simple et l'hôtel correspondait parfaitement à la description. Je recommande vivement ce service !"</p>
                    <div class="flex text-yellow-400">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                </div>
                
                 <div class="testimonial-card bg-white rounded-xl p-6 shadow-sm">
                    <div class="flex items-center mb-4">
                        <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Client" class="w-12 h-12 rounded-full object-cover mr-4" />
                        <div>
                            <h4 class="font-bold text-gray-800">Thomas Leroy</h4>
                            <p class="text-gray-500 text-sm">Voyage d'affaires à Pékin</p>
                        </div>
                    </div>
                    <p class="text-gray-600 mb-4">"Service client exceptionnel qui m'a aidé à modifier ma réservation à la dernière minute sans problème."</p>
                    <div class="flex text-yellow-400">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                </div>
             
                <div class="testimonial-card bg-white rounded-xl p-6 shadow-sm">
                    <div class="flex items-center mb-4">
                        <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Client" class="w-12 h-12 rounded-full object-cover mr-4" />
                        <div>
                            <h4 class="font-bold text-gray-800">Camille Dubois</h4>
                            <p class="text-gray-500 text-sm">Vacances à Hainan</p>
                        </div>
                    </div>
                    <p class="text-gray-600 mb-4">"Nous avons trouvé une offre exceptionnelle pour un hôtel 5 étoiles grâce à ce site. Un séjour parfait !"</p>
                    <div class="flex text-yellow-400">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="contact" class="py-16 bg-white">
        <div class="container mx-auto px-4">
            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-4xl font-bold text-secondary mb-4">Prêt à Réserver Votre Séjour ?</h2>
                <p class="text-gray-600 max-w-3xl mx-auto">Contactez-nous dès aujourd'hui pour toute question ou demande spéciale.</p>
            </div>
            
            <div class="grid md:grid-cols-2 gap-8">
                <div>
                    <div class="bg-gray-50 rounded-xl p-6 h-full">
                        <h3 class="text-xl font-bold text-secondary mb-6">Nous Contacter</h3>
                        
                        <div class="space-y-4">
                            <div class="flex items-start">
                                <div class="bg-primary bg-opacity-10 rounded-full p-3 mr-4">
                                    <i class="fas fa-map-marker-alt text-primary"></i>
                                </div>
                                <div>
                                    <h4 class="font-semibold text-gray-800">Adresse</h4>
                                    <p class="text-gray-600">123 Avenue des Voyages, Shanghai, Chine</p>
                                </div>
                            </div>
                            
                            <div class="flex items-start">
                                <div class="bg-primary bg-opacity-10 rounded-full p-3 mr-4">
                                    <i class="fas fa-phone-alt text-primary"></i>
                                </div>
                                <div>
                                    <h4 class="font-semibold text-gray-800">Téléphone</h4>
                                    <p class="text-gray-600">+86 21 1234 5678</p>
                                </div>
                            </div>
                            
                            <div class="flex items-start">
                                <div class="bg-primary bg-opacity-10 rounded-full p-3 mr-4">
                                    <i class="fas fa-envelope text-primary"></i>
                                </div>
                                <div>
                                    <h4 class="font-semibold text-gray-800">Email</h4>
                                    <p class="text-gray-600">reservations@chinastay.com</p>
                                </div>
                            </div>
                            
                            <div class="flex items-start">
                                <div class="bg-primary bg-opacity-10 rounded-full p-3 mr-4">
                                    <i class="fab fa-whatsapp text-primary"></i>
                                </div>
                                <div>
                                    <h4 class="font-semibold text-gray-800">WhatsApp</h4>
                                    <p class="text-gray-600">+86 123 4567 8910</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="mt-8">
                            <h4 class="font-semibold text-gray-800 mb-4">Suivez-Nous</h4>
                            <div class="flex space-x-4">
                                <a href="#" class="bg-gray-200 hover:bg-primary hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition duration-300">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" class="bg-gray-200 hover:bg-primary hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition duration-300">
                                    <i class="fab fa-instagram"></i>
                                </a>
                                <a href="#" class="bg-gray-200 hover:bg-primary hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition duration-300">
                                    <i class="fab fa-weixin"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div>
                    <div class="bg-gray-50 rounded-xl p-6 h-full">
                        <h3 class="text-xl font-bold text-secondary mb-6">Demande de Réservation</h3>
                        <form>
                            <div class="grid grid-cols-1 gap-4">
                                <div>
                                    <label for="name" class="block text-gray-700 font-medium mb-2">Nom Complet</label>
                                    <input type="text" id="name" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Votre nom" />
                                </div>
                                
                                <div>
                                    <label for="email" class="block text-gray-700 font-medium mb-2">Adresse Email</label>
                                    <input type="email" id="email" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="votre@email.com" />
                                </div>
                                
                                <div class="grid grid-cols-2 gap-4">
                                    <div>
                                        <label for="checkin" class="block text-gray-700 font-medium mb-2">Date d'Arrivée</label>
                                        <input type="date" id="checkin" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" />
                                    </div>
                                    <div>
                                        <label for="checkout" class="block text-gray-700 font-medium mb-2">Date de Départ</label>
                                        <input type="date" id="checkout" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" />
                                    </div>
                                </div>
                                
                                <div>
                                    <label for="room-type" class="block text-gray-700 font-medium mb-2">Type de Chambre</label>
                                    <select id="room-type" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                                        <option value="">Sélectionnez un type</option>
                                        <option value="single">Chambre Simple</option>
                                        <option value="double">Chambre Double</option>
                                        <option value="suite">Suite</option>
                                        <option value="family">Chambre Familiale</option>
                                    </select>
                                </div>
                                
                                <div>
                                    <label for="message" class="block text-gray-700 font-medium mb-2">Demandes Spéciales</label>
                                    <textarea id="message" rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Vos demandes particulières..."></textarea>
                                </div>
                                
                                <div>
                                    <button type="submit" class="w-full bg-primary hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
                                        Envoyer la Demande
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>

    </div>
  );
};

export default HomePage;    