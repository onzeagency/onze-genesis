import { useState } from 'react';
import Navigation from '@/components/Navigation';
import TechnoGrid from '@/components/TechnoGrid';
import GlitchText from '@/components/GlitchText';

const products = [
  {
    id: 1,
    name: 'T-Shirt ONZE Classic',
    category: 'Clothing',
    price: 25,
    image: '/placeholder.svg',
    description: 'T-shirt premium 100% coton avec logo ONZE brodé. Design cyberpunk exclusif créé par notre équipe artistique.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Noir', 'Gris foncé', 'Rose néon'],
    features: ['Coton bio 180g/m²', 'Coupe unisexe', 'Logo brodé haute qualité', 'Étiquette tissée'],
    stock: 'En stock'
  },
  {
    id: 2,
    name: 'Hoodie Underground',
    category: 'Clothing',
    price: 55,
    image: '/placeholder.svg',
    description: 'Hoodie épais avec capuche doublée, parfait pour les soirées underground. Design techno avec détails réfléchissants.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Noir', 'Gris anthracite'],
    features: ['Molleton 320g/m²', 'Capuche doublée', 'Poche kangourou', 'Détails réfléchissants'],
    stock: 'Stock limité'
  },
  {
    id: 3,
    name: 'Casquette Signature',
    category: 'Accessories',
    price: 35,
    image: '/placeholder.svg',
    description: 'Casquette snapback avec logo ONZE brodé 3D. Parfaite pour compléter votre look underground.',
    sizes: ['Unique'],
    colors: ['Noir/Rose', 'Gris/Noir'],
    features: ['Broderie 3D', 'Visière plate', 'Fermeture snapback', 'Intérieur satiné'],
    stock: 'En stock'
  },
  {
    id: 4,
    name: 'Totebag Cyber',
    category: 'Accessories',
    price: 20,
    image: '/placeholder.svg',
    description: 'Sac en toile résistante avec impression haute qualité. Idéal pour transporter vos vinyles et accessoires.',
    sizes: ['40x35cm'],
    colors: ['Noir', 'Blanc'],
    features: ['Toile 100% coton', 'Impression sérigraphique', 'Anses renforcées', 'Design exclusif'],
    stock: 'En stock'
  },
  {
    id: 5,
    name: 'Stickers Pack',
    category: 'Accessories',
    price: 8,
    image: '/placeholder.svg',
    description: 'Pack de 10 stickers variés avec logos et designs ONZE. Résistants à l\'eau et aux UV.',
    sizes: ['Mixed'],
    colors: ['Multicolore'],
    features: ['Pack de 10', 'Résistant UV', 'Waterproof', 'Designs variés'],
    stock: 'En stock'
  },
  {
    id: 6,
    name: 'Vinyle ONZE001',
    category: 'Music',
    price: 18,
    image: '/placeholder.svg',
    description: 'Premier EP du label en format vinyle 12". Édition limitée avec artwork exclusif.',
    sizes: ['12"'],
    colors: ['Noir classique', 'Rose transparent (Édition limitée)'],
    features: ['180g audiophile', 'Pochette premium', 'Édition numérotée', 'Artwork exclusif'],
    stock: 'Édition limitée'
  }
];

const categories = ['All', 'Clothing', 'Accessories', 'Music'];

const Merch = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cart, setCart] = useState<{[key: number]: number}>({});

  const handleMouseMove = (e: React.MouseEvent) => {
    setMouse({ x: e.clientX, y: e.clientY });
  };

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const addToCart = (productId: number) => {
    setCart(prev => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1
    }));
  };

  const getCartTotal = () => {
    return Object.entries(cart).reduce((total, [productId, quantity]) => {
      const product = products.find(p => p.id === parseInt(productId));
      return total + (product ? product.price * quantity : 0);
    }, 0);
  };

  const getTotalItems = () => {
    return Object.values(cart).reduce((total, quantity) => total + quantity, 0);
  };

  const getStockColor = (stock: string) => {
    switch (stock) {
      case 'En stock': return 'text-primary';
      case 'Stock limité': return 'text-accent';
      case 'Édition limitée': return 'text-primary-intense';
      default: return 'text-destructive';
    }
  };

  return (
    <div className="bg-background relative min-h-screen" onMouseMove={handleMouseMove}>
      <Navigation activeSection="merch" />
      <TechnoGrid className="fixed inset-0 z-0 opacity-10" />
      
      {/* Header Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <GlitchText 
              text="MERCH" 
              className="text-7xl font-hardrace font-bold glow-text"
            />
            <p className="text-xl font-tech text-muted-foreground leading-relaxed">
              Découvrez notre collection exclusive de merchandise underground. 
              Exprimez votre appartenance à la culture ONZE avec style et authenticité.
            </p>
          </div>
        </div>
      </section>

      {/* Categories and Cart */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0 mb-16">
            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 text-sm font-tech font-medium tracking-wider uppercase border transition-all duration-300 rounded-2xl ${
                    selectedCategory === category
                      ? 'border-primary bg-primary text-background shadow-neon'
                      : 'border-primary/30 text-primary hover:border-primary/60 hover:bg-primary/10'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Cart Summary */}
            {getTotalItems() > 0 && (
              <div className="holo-card p-4 flex items-center space-x-4">
                <div className="text-sm font-tech">
                  <span className="text-primary font-bold">{getTotalItems()}</span> article(s)
                </div>
                <div className="text-lg font-tech font-bold text-primary">
                  {getCartTotal()}€
                </div>
                <button className="cyber-button text-xs">
                  <span>PANIER</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="holo-card group overflow-hidden">
                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-card to-background overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-2 py-1 text-xs font-tech font-medium rounded bg-background/90 ${getStockColor(product.stock)}`}>
                      {product.stock}
                    </span>
                  </div>
                  {cart[product.id] && (
                    <div className="absolute top-4 left-4">
                      <span className="px-2 py-1 text-xs font-tech font-bold rounded bg-primary text-background">
                        {cart[product.id]} dans le panier
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="p-6 space-y-4">
                  <div>
                    <p className="text-xs font-tech text-primary font-medium uppercase">{product.category}</p>
                    <h3 className="text-lg font-tech text-foreground font-bold">{product.name}</h3>
                  </div>
                  
                  <p className="text-muted-foreground text-sm font-tech leading-relaxed line-clamp-3">
                    {product.description}
                  </p>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-primary/20">
                    <div className="text-xl font-tech font-bold text-primary">{product.price}€</div>
                    <button 
                      onClick={() => addToCart(product.id)}
                      className="cyber-button text-xs"
                    >
                      <span>COMMANDER</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Merch;