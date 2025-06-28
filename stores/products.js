export const useProductsStore = defineStore('products', {
  state: () => ({
    models: [
        {
            id: "robots_jasoi2",
            title: "Sci-Fi Robot Model",
            description: "High-quality sci-fi robot 3D model designed with intricate mechanical joints, layered armor plating, and futuristic detailing. Optimized for 3D printing without supports, it’s perfect for hobbyists, game developers, and artists seeking a versatile robotic character for print or digital projects. Includes articulated parts allowing for dynamic posing in animations or display.",
            price: '12.99',
            old_price: '14.99',
            currency: "USD",
            category: "Robots",
            tags: ["robot", "sci-fi", "printable", "character"],
            thumbnail: "/img/product-image.png",
            images: ["/img/products/robot-front.png", "/img/products/robot-side.png", "/img/products/robot-back.png"],
            formats: ["STL"],
            uploaded_by: "admin",
            upload_date: "2025-06-23T12:34:56Z"
        },
        {
            id: "weapons_vq7p1r",
            title: "Medieval Sword",
            description: "Detailed 3D model of a medieval longsword showcasing realistic blade curvature, engraved cross-guard, and textured grip. Ideal for historical reenactments, tabletop games, or fantasy animations. Balanced polygon count ensures compatibility with both real-time rendering and high-quality 3D printing.",
            price: '5.99',
            old_price: '6.89',
            currency: "USD",
            category: "Weapons",
            tags: ["sword", "medieval", "weapon"],
            thumbnail: "/img/product-image.png",
            images: ["/img/products/sword-front.png"],
            formats: ["STL"],
            uploaded_by: "admin",
            upload_date: "2025-06-20T10:00:00Z"
        },
        {
            id: "creatures_jk92ld",
            title: "Fantasy Dragon",
            description: "Epic fantasy dragon model featuring highly detailed scales, expansive wings with membrane textures, and sharp horns. Comes with separate parts for easy printing and assembly, including a sturdy base stand. Perfect for collectors, game designers, and fantasy enthusiasts looking for a show-stopping centerpiece.",
            price: '24.99',
            old_price: '28.74',
            currency: "USD",
            category: "Creatures",
            tags: ["dragon", "fantasy", "creature"],
            thumbnail: "/img/product-image.png",
            images: ["/img/products/dragon-front.png", "/img/products/dragon-top.png"],
            formats: ["STL"],
            uploaded_by: "admin",
            upload_date: "2025-06-19T09:00:00Z"
        },
        {
            id: "vehicles_qk91zx",
            title: "Low Poly Car",
            description: "Stylized low-poly car model designed specifically for mobile and indie game development. Its clean geometry and vibrant shapes ensure excellent performance and easy customization for various game engines. A perfect asset for developers seeking a charming vehicle with minimal polygon count.",
            price: '2.99',
            old_price: '3.39',
            currency: "USD",
            category: "Vehicles",
            tags: ["car", "lowpoly", "vehicle"],
            thumbnail: "/img/product-image.png",
            images: ["/img/products/car-front.png"],
            formats: ["STL"],
            uploaded_by: "admin",
            upload_date: "2025-06-18T15:30:00Z"
        },
        {
            id: "anatomy_bsa72k",
            title: "Human Skull",
            description: "Highly realistic anatomical 3D model of a human skull with precise bone texture and accurate proportions. Excellent for medical students, educators, artists, and forensic modelers. Suitable for detailed studies, reference, or as a base for artistic projects requiring anatomical correctness.",
            price: '4.59',
            old_price: '5.19',
            currency: "USD",
            category: "Anatomy",
            tags: ["skull", "anatomy", "realistic"],
            thumbnail: "/img/product-image.png",
            images: ["/img/products/skull-side.png"],
            formats: ["STL"],
            uploaded_by: "admin",
            upload_date: "2025-06-17T12:45:00Z"
        },
        {
            id: "wearables_kq1w8c",
            title: "Sci-Fi Helmet",
            description: "Futuristic helmet designed for cosplay and 3D printing with detailed ventilation slits, layered plating, and a removable visor. Combines practical design with sci-fi aesthetics, making it ideal for costume makers, prop builders, and collectors. Model optimized for easy printing and assembly.",
            price: '9.99',
            old_price: '11.49',
            currency: "USD",
            category: "Wearables",
            tags: ["helmet", "sci-fi", "printable"],
            thumbnail: "/img/product-image.png",
            images: ["/img/products/helmet-front.png", "/img/products/helmet-back.png"],
            formats: ["STL"],
            uploaded_by: "admin",
            upload_date: "2025-06-16T11:00:00Z"
        },
        {
            id: "furniture_hwr02m",
            title: "Modern Chair",
            description: "Minimalist modern chair featuring smooth, flowing contours and elegant geometric design. Suitable for interior visualizations, architectural projects, or 3D printing for custom furniture prototyping. Lightweight and optimized to balance detail with polygon efficiency.",
            price: '3.99',
            old_price: '4.59',
            currency: "USD",
            category: "Furniture",
            tags: ["chair", "interior", "modern"],
            thumbnail: "/img/product-image.png",
            images: ["/img/products/chair-front.png"],
            formats: ["STL"],
            uploaded_by: "admin",
            upload_date: "2025-06-15T08:30:00Z"
        },
        {
            id: "props_tza88e",
            title: "Treasure Chest",
            description: "Classic wooden treasure chest with detailed wood grain, metal hinges, and a locking mechanism. Ideal for fantasy scenes, tabletop games, or as a decorative prop. This model is fully textured and ready for high-quality 3D printing or digital rendering.",
            price: '6.99',
            old_price: '7.99',
            currency: "USD",
            category: "Props",
            tags: ["chest", "treasure", "prop"],
            thumbnail: "/img/product-image.png",
            images: ["/img/products/chest-open.png"],
            formats: ["STL"],
            uploaded_by: "admin",
            upload_date: "2025-06-14T17:00:00Z"
        },
        {
            id: "vehicles_zv5n9a",
            title: "Spaceship Cruiser",
            description: "Highly detailed sci-fi spaceship cruiser model featuring a layered hull, detailed engine components, and complex surface textures. Designed for space-themed games, animations, and printing projects requiring a futuristic look with a strong visual impact.",
            price: '14.99',
            old_price: '17.24',
            currency: "USD",
            category: "Vehicles",
            tags: ["spaceship", "sci-fi", "space"],
            thumbnail: "/img/product-image.png",
            images: ["/img/products/spaceship-top.png"],
            formats: ["STL"],
            uploaded_by: "admin",
            upload_date: "2025-06-13T13:20:00Z"
        },
        {
            id: "animals_oy5ltu",
            title: "Cute Low Poly Dog",
            description: "Adorable cartoon-style low poly dog perfect for mobile games and stylized projects. Features simple shapes, expressive eyes, and smooth shading, designed to perform well on low-end devices while maintaining charm and personality.",
            price: '1.59',
            old_price: '1.79',
            currency: "USD",
            category: "Animals",
            tags: ["dog", "lowpoly", "cartoon"],
            thumbnail: "/img/product-image.png",
            images: ["/img/product-image.png"],
            formats: ["STL"],
            uploaded_by: "admin",
            upload_date: "2025-06-12T10:10:00Z"
        }
    ]
  
  }),

  getters: {
    getByCategory: (state) => (category) => {
      return state.models.filter(model => model.category === category)
    },
    getById: (state) => {
        return (id) => state.models.find(model => model.id === id)
    }
  }
})