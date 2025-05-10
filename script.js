// PrintWear - Sablon & Bordir Baju
// Main JavaScript File

// ========== Data ==========

// Product Data
const productData = [
  {
    id: "1",
    name: "Kaos Polos Premium",
    type: "tshirt",
    color: "black",
    size: "m",
    material: "100% Cotton Combed 30s",
    price: 75000,
    priceFormatted: formatCurrency(75000),
    image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=800",
    isBestseller: true
  },
  {
    id: "2",
    name: "Kaos Polos Putih",
    type: "tshirt",
    color: "white",
    size: "m",
    material: "100% Cotton Combed 24s",
    price: 65000,
    priceFormatted: formatCurrency(65000),
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=800",
    isBestseller: false
  },
  {
    id: "3",
    name: "Kaos Polos Berwarna",
    type: "tshirt",
    color: "red",
    size: "m",
    material: "100% Cotton Combed 30s",
    price: 70000,
    priceFormatted: formatCurrency(70000),
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=800",
    isBestseller: false
  },
  {
    id: "4",
    name: "Polo Shirt Premium",
    type: "polo",
    color: "navy",
    size: "m",
    material: "Cotton Pique",
    price: 120000,
    priceFormatted: formatCurrency(120000),
    image: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=800",
    isBestseller: false
  },
  {
    id: "5",
    name: "Hoodie Premium",
    type: "hoodie",
    color: "black",
    size: "m",
    material: "Fleece Cotton",
    price: 200000,
    priceFormatted: formatCurrency(200000),
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=800",
    isBestseller: false
  },
  {
    id: "6",
    name: "Sweatshirt Premium",
    type: "jacket",
    color: "black",
    size: "m",
    material: "French Terry",
    price: 180000,
    priceFormatted: formatCurrency(180000),
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=800",
    isBestseller: false
  }
];

// Design Data
const designData = [
  {
    id: "1",
    name: "Abstrak Geometri",
    type: "sablon",
    typeLabel: "Sablon",
    image: "https://pixabay.com/get/g792e264c2c59e85cbbf7acef4592fda9a1ccc713775d0ffd5a2db5ad5e4fcf0646a7c5159b20a6699dd0e15e3ec39cc21b435953699f9eadc00af0704927a791_1280.jpg"
  },
  {
    id: "2",
    name: "Bordir Floral",
    type: "bordir",
    typeLabel: "Bordir",
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=500"
  },
  {
    id: "3",
    name: "Vintage Style",
    type: "sablon",
    typeLabel: "Sablon",
    image: "https://pixabay.com/get/g8bfded235339e9e96f25bce7ab29b6364205b184c8cd78778582f23668a1852f8046834cb376cd90b8e8c1bd5e4439dc6c2806815a5f8c67a239325bab564119_1280.jpg"
  },
  {
    id: "4",
    name: "Logo Corporate",
    type: "bordir",
    typeLabel: "Bordir",
    image: "https://pixabay.com/get/g0a7a3a49c23390413a36be510d816ae49ceff19de4ffb423dc6fee0bb1df1b90b02fd76d58aa4df3d2ed6c6e1310250ed787c6c62892d1cb2cfbeab789683d1a_1280.jpg"
  },
  {
    id: "5",
    name: "Minimalist Art",
    type: "sablon",
    typeLabel: "Sablon",
    image: "https://images.unsplash.com/photo-1553531384-397c80973a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=500"
  },
  {
    id: "6",
    name: "Modern Logo",
    type: "logo",
    typeLabel: "Logo",
    image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=500"
  },
  {
    id: "7",
    name: "Statement Typography",
    type: "typografi",
    typeLabel: "Typografi",
    image: "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=500"
  },
  {
    id: "8",
    name: "Artistic Illustration",
    type: "ilustrasi",
    typeLabel: "Ilustrasi",
    image: "https://images.unsplash.com/photo-1561214078-f3247647fc5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=500"
  }
];

// Cart and Customization State
let cartItems = [];
let currentProduct = {
  id: "1",
  type: "tshirt",
  color: "black",
  size: "m"
};
let currentDesign = null;
let currentTextDesign = {
  text: "",
  font: "arial",
  color: "black",
  position: "front",
  designType: "sablon"
};

// ========== Utility Functions ==========

// Format currency (Indonesian Rupiah)
function formatCurrency(amount) {
  return `Rp ${amount.toLocaleString('id-ID')}`;
}

// Get product image by type and color
function getProductImageByTypeAndColor(type, color) {
  if (type === 'tshirt') {
    if (color === 'black') {
      return "https://images.unsplash.com/photo-1503341504253-dff4815485f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=800";
    } else if (color === 'white') {
      return "https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=800";
    } else {
      return "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=800";
    }
  } else if (type === 'polo') {
    return "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=800";
  } else if (type === 'hoodie') {
    return "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=800";
  } else if (type === 'jacket') {
    return "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=800";
  }
  
  // Default image
  return "https://images.unsplash.com/photo-1503341504253-dff4815485f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=800";
}

// Calculate price based on product type and design type
function calculatePrice(productType, designType) {
  let basePrice = 75000; // Default for t-shirt
  
  switch(productType) {
    case 'polo':
      basePrice = 120000;
      break;
    case 'hoodie':
      basePrice = 200000;
      break;
    case 'jacket':
      basePrice = 180000;
      break;
    case 'cap':
      basePrice = 50000;
      break;
  }
  
  // Add design cost
  const designCost = designType === 'bordir' ? 25000 : 15000;
  
  return basePrice + designCost;
}

// Show toast notification
function showToast(message, type = 'success') {
  const toast = document.getElementById('toast');
  const toastContent = document.getElementById('toastContent');
  
  toastContent.textContent = message;
  
  if (type === 'success') {
    toast.style.color = 'var(--success)';
  } else if (type === 'error') {
    toast.style.color = 'var(--danger)';
  }
  
  toast.classList.add('active');
  
  setTimeout(() => {
    toast.classList.remove('active');
  }, 3000);
}

// Get color text from value
function getColorText(colorValue) {
  const colorMap = {
    'black': 'Hitam',
    'white': 'Putih',
    'navy': 'Navy',
    'red': 'Merah',
    'green': 'Hijau',
    'blue': 'Biru'
  };
  
  return colorMap[colorValue] || colorValue;
}

// Get position text from value
function getPositionText(positionValue) {
  const positionMap = {
    'front': 'Depan',
    'back': 'Belakang',
    'left-sleeve': 'Lengan Kiri',
    'right-sleeve': 'Lengan Kanan',
    'pocket': 'Kantong'
  };
  
  return positionMap[positionValue] || positionValue;
}

// Get product type text from value
function getProductTypeText(typeValue) {
  const typeMap = {
    'tshirt': 'T-Shirt',
    'polo': 'Polo Shirt',
    'hoodie': 'Hoodie',
    'jacket': 'Jaket',
    'cap': 'Topi'
  };
  
  return typeMap[typeValue] || typeValue;
}

// Generate unique ID
function generateId() {
  return Date.now().toString() + Math.random().toString(36).substr(2, 5);
}

// ========== DOM Elements and Event Listeners ==========
document.addEventListener('DOMContentLoaded', function() {
  // Set current year in footer
  document.getElementById('currentYear').textContent = new Date().getFullYear();
  
  // Mobile menu toggle
  const mobileMenuButton = document.getElementById('mobileMenuButton');
  const mainNav = document.getElementById('mainNav');
  
  mobileMenuButton.addEventListener('click', function() {
    mainNav.classList.toggle('active');
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
        
        // Close mobile menu if open
        mainNav.classList.remove('active');
      }
    });
  });
  
  // Product filter
  const productCategories = document.getElementById('productCategories');
  const productFilterButtons = productCategories.querySelectorAll('.filter-btn');
  
  productFilterButtons.forEach(button => {
    button.addEventListener('click', function() {
      const category = this.dataset.category;
      
      // Update active class
      productFilterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      
      // Filter products
      filterProducts(category);
    });
  });
  
  // Design filter
  const designCategories = document.getElementById('designCategories');
  const designFilterButtons = designCategories.querySelectorAll('.filter-btn');
  
  designFilterButtons.forEach(button => {
    button.addEventListener('click', function() {
      const category = this.dataset.category;
      
      // Update active class
      designFilterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      
      // Filter designs
      filterDesigns(category);
    });
  });
  
  // Gallery modal filter
  const galleryFilter = document.getElementById('galleryFilter');
  const galleryFilterButtons = galleryFilter.querySelectorAll('.filter-btn');
  
  galleryFilterButtons.forEach(button => {
    button.addEventListener('click', function() {
      const category = this.dataset.category;
      
      // Update active class
      galleryFilterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      
      // Filter gallery designs
      filterGalleryDesigns(category);
    });
  });
  
  // Initialize products grid
  initProductsGrid();
  
  // Initialize designs grid
  initDesignsGrid();
  
  // Initialize gallery grid
  initGalleryGrid();
  
  // Setup customization form event listeners
  setupCustomizationListeners();
  
  // Setup cart modal
  setupCartModal();
  
  // Setup preview modal
  setupPreviewModal();
  
  // Setup gallery modal
  setupGalleryModal();
  
  // Setup contact form
  setupContactForm();
  
  // Initialize design file upload
  initDesignUpload();
  
  // Initialize customization preview
  updatePreview();
});

// Initialize products grid
function initProductsGrid() {
  const productsGrid = document.getElementById('productsGrid');
  
  // Clear existing content
  productsGrid.innerHTML = '';
  
  // Add products
  productData.forEach(product => {
    const productCard = createProductCard(product);
    productsGrid.appendChild(productCard);
  });
}

// Create product card element
function createProductCard(product) {
  const productCard = document.createElement('div');
  productCard.className = 'product-card';
  productCard.dataset.type = product.type;
  
  productCard.innerHTML = `
    <div class="product-image">
      <img src="${product.image}" alt="${product.name}">
      ${product.isBestseller ? '<div class="bestseller-badge">Bestseller</div>' : ''}
    </div>
    <div class="product-info">
      <h3>${product.name}</h3>
      <p class="product-material">Bahan: ${product.material}</p>
      <div class="product-footer">
        <div class="product-price">${product.priceFormatted}</div>
        <button class="btn btn-primary customize-btn" data-product-id="${product.id}">Kustomisasi</button>
      </div>
    </div>
  `;
  
  // Add event listener for customize button
  const customizeBtn = productCard.querySelector('.customize-btn');
  customizeBtn.addEventListener('click', () => {
    selectProduct(product.id);
    scrollToSection('customization');
  });
  
  return productCard;
}

// Filter products
function filterProducts(category) {
  const productsGrid = document.getElementById('productsGrid');
  const productCards = productsGrid.querySelectorAll('.product-card');
  
  productCards.forEach(card => {
    if (category === 'all' || card.dataset.type === category) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

// Initialize designs grid
function initDesignsGrid() {
  const designsGrid = document.getElementById('designsGrid');
  
  // Clear existing content
  designsGrid.innerHTML = '';
  
  // Add designs
  designData.forEach(design => {
    const designCard = createDesignCard(design);
    designsGrid.appendChild(designCard);
  });
}

// Create design card element
function createDesignCard(design) {
  const designCard = document.createElement('div');
  designCard.className = 'design-card';
  designCard.dataset.type = design.type;
  
  designCard.innerHTML = `
    <div class="design-image">
      <img src="${design.image}" alt="${design.name}">
    </div>
    <div class="design-info">
      <h3>${design.name}</h3>
      <div class="design-meta">
        <span class="design-type">${design.typeLabel}</span>
        <span class="design-action">Gunakan</span>
      </div>
    </div>
  `;
  
  // Add event listener for design selection
  designCard.addEventListener('click', () => {
    selectDesign(design.id, design.type, design.image);
    scrollToSection('customization');
  });
  
  return designCard;
}

// Filter designs
function filterDesigns(category) {
  const designsGrid = document.getElementById('designsGrid');
  const designCards = designsGrid.querySelectorAll('.design-card');
  
  designCards.forEach(card => {
    if (category === 'all' || card.dataset.type === category) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

// Initialize gallery grid
function initGalleryGrid() {
  const galleryGrid = document.getElementById('galleryGrid');
  
  // Clear existing content
  galleryGrid.innerHTML = '';
  
  // Add designs to gallery
  designData.forEach(design => {
    const designCard = createGalleryDesignCard(design);
    galleryGrid.appendChild(designCard);
  });
}

// Create gallery design card element
function createGalleryDesignCard(design) {
  const designCard = document.createElement('div');
  designCard.className = 'design-card';
  designCard.dataset.type = design.type;
  
  designCard.innerHTML = `
    <div class="design-image">
      <img src="${design.image}" alt="${design.name}">
    </div>
    <div class="design-info">
      <h3>${design.name}</h3>
      <div class="design-meta">
        <span class="design-type">${design.typeLabel}</span>
        <span class="design-action">Pilih</span>
      </div>
    </div>
  `;
  
  // Add event listener for design selection in gallery
  designCard.addEventListener('click', () => {
    selectDesignFromGallery(design.id, design.type, design.image);
  });
  
  return designCard;
}

// Filter gallery designs
function filterGalleryDesigns(category) {
  const galleryGrid = document.getElementById('galleryGrid');
  const designCards = galleryGrid.querySelectorAll('.design-card');
  
  designCards.forEach(card => {
    if (category === 'all' || card.dataset.type === category) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

// Setup customization form event listeners
function setupCustomizationListeners() {
  // Product type
  const productTypeSelect = document.getElementById('productType');
  productTypeSelect.addEventListener('change', function() {
    currentProduct.type = this.value;
    updatePreview();
  });
  
  // Product color
  const productColorSelect = document.getElementById('productColor');
  productColorSelect.addEventListener('change', function() {
    currentProduct.color = this.value;
    updatePreview();
  });
  
  // Product size
  const productSizeSelect = document.getElementById('productSize');
  productSizeSelect.addEventListener('change', function() {
    currentProduct.size = this.value;
    updatePreview();
  });
  
  // Design type
  const designTypeRadios = document.querySelectorAll('input[name="designType"]');
  designTypeRadios.forEach(radio => {
    radio.addEventListener('change', function() {
      currentTextDesign.designType = this.value;
      updatePreview();
    });
  });
  
  // Design position
  const designPositionSelect = document.getElementById('designPosition');
  designPositionSelect.addEventListener('change', function() {
    currentTextDesign.position = this.value;
    updatePreview();
  });
  
  // Custom text
  const customTextInput = document.getElementById('customText');
  customTextInput.addEventListener('input', function() {
    currentTextDesign.text = this.value;
    updatePreview();
  });
  
  // Text font
  const textFontSelect = document.getElementById('textFont');
  textFontSelect.addEventListener('change', function() {
    currentTextDesign.font = this.value;
    updatePreview();
  });
  
  // Text color
  const textColorSelect = document.getElementById('textColor');
  textColorSelect.addEventListener('change', function() {
    currentTextDesign.color = this.value;
    updatePreview();
  });
  
  // Add to cart button
  const addToCartBtn = document.getElementById('addToCartBtn');
  addToCartBtn.addEventListener('click', function() {
    openPreviewModal();
  });
  
  // Open gallery button
  const openGalleryBtn = document.getElementById('openGalleryBtn');
  openGalleryBtn.addEventListener('click', function() {
    openGalleryModal();
  });
}

// Initialize design file upload
function initDesignUpload() {
  const designUpload = document.getElementById('designUpload');
  const uploadArea = document.getElementById('uploadArea');
  
  // Drag and drop functionality
  uploadArea.addEventListener('dragover', function(e) {
    e.preventDefault();
    this.classList.add('active');
  });
  
  uploadArea.addEventListener('dragleave', function() {
    this.classList.remove('active');
  });
  
  uploadArea.addEventListener('drop', function(e) {
    e.preventDefault();
    this.classList.remove('active');
    
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      handleDesignFile(file);
    } else {
      showToast('Hanya file gambar yang diperbolehkan', 'error');
    }
  });
  
  // File input change
  designUpload.addEventListener('change', function() {
    if (this.files && this.files[0]) {
      handleDesignFile(this.files[0]);
    }
  });
  
  // Click on upload area
  uploadArea.addEventListener('click', function() {
    designUpload.click();
  });
}

// Handle design file upload
function handleDesignFile(file) {
  if (file.size > 5 * 1024 * 1024) {
    showToast('Ukuran file maksimal 5MB', 'error');
    return;
  }
  
  const reader = new FileReader();
  reader.onload = function(e) {
    currentDesign = {
      id: 'custom',
      type: 'custom',
      src: e.target.result
    };
    
    updatePreview();
    showToast('Desain berhasil diunggah');
  };
  
  reader.readAsDataURL(file);
}

// Update customization preview
function updatePreview() {
  const productImage = document.getElementById('productImage');
  const designOverlay = document.getElementById('designOverlay');
  const totalPrice = document.getElementById('totalPrice');
  
  // Update product image
  productImage.src = getProductImageByTypeAndColor(currentProduct.type, currentProduct.color);
  
  // Update design overlay
  if (currentDesign && currentDesign.src) {
    designOverlay.innerHTML = `<img src="${currentDesign.src}" alt="Selected design">`;
  } else if (currentTextDesign.text) {
    designOverlay.innerHTML = `
      <div class="text-overlay" style="font-family: ${currentTextDesign.font}, sans-serif; color: ${currentTextDesign.color};">
        ${currentTextDesign.text}
      </div>
    `;
  } else {
    designOverlay.innerHTML = '';
  }
  
  // Update price
  const price = calculatePrice(currentProduct.type, currentTextDesign.designType);
  totalPrice.textContent = formatCurrency(price);
}

// Select product for customization
function selectProduct(productId) {
  const product = productData.find(p => p.id === productId);
  if (product) {
    currentProduct = {
      id: product.id,
      type: product.type,
      color: product.color,
      size: product.size
    };
    
    // Update form values
    document.getElementById('productType').value = product.type;
    document.getElementById('productColor').value = product.color;
    document.getElementById('productSize').value = product.size;
    
    updatePreview();
  }
}

// Select design for customization
function selectDesign(designId, designType, src) {
  currentDesign = {
    id: designId,
    type: designType,
    src: src
  };
  
  // Update design type radio
  const designTypeRadios = document.querySelectorAll('input[name="designType"]');
  designTypeRadios.forEach(radio => {
    if (radio.value === designType) {
      radio.checked = true;
      currentTextDesign.designType = designType;
    }
  });
  
  // Clear text input
  document.getElementById('customText').value = '';
  currentTextDesign.text = '';
  
  updatePreview();
}

// Select design from gallery
function selectDesignFromGallery(designId, designType, src) {
  selectDesign(designId, designType, src);
  closeGalleryModal();
}

// Scroll to section
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    window.scrollTo({
      top: section.offsetTop - 80,
      behavior: 'smooth'
    });
  }
}

// ========== Cart Functions ==========

// Setup cart modal
function setupCartModal() {
  const cartButton = document.getElementById('cartButton');
  const cartModal = document.getElementById('cartModal');
  const closeCartBtn = document.getElementById('closeCartBtn');
  const checkoutBtn = document.getElementById('checkoutBtn');
  
  // Open cart modal
  cartButton.addEventListener('click', function() {
    openCartModal();
  });
  
  // Close cart modal
  closeCartBtn.addEventListener('click', function() {
    closeCartModal();
  });
  
  // Close modal when clicking overlay
  cartModal.querySelector('.modal-overlay').addEventListener('click', function() {
    closeCartModal();
  });
  
  // Checkout button
  checkoutBtn.addEventListener('click', function() {
    checkout();
  });
}

// Open cart modal
function openCartModal() {
  const cartModal = document.getElementById('cartModal');
  cartModal.classList.add('active');
  document.body.style.overflow = 'hidden';
  
  updateCartItems();
}

// Close cart modal
function closeCartModal() {
  const cartModal = document.getElementById('cartModal');
  cartModal.classList.remove('active');
  document.body.style.overflow = '';
}

// Update cart items display
function updateCartItems() {
  const cartItems = document.getElementById('cartItems');
  const cartCount = document.getElementById('cartCount');
  const cartSubtotal = document.getElementById('cartSubtotal');
  const cartTotal = document.getElementById('cartTotal');
  
  // Update cart count
  cartCount.textContent = window.cartItems.length;
  
  // If cart is empty
  if (window.cartItems.length === 0) {
    cartItems.innerHTML = `
      <div class="empty-cart">
        <svg class="empty-cart-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>
        <p>Keranjang belanja Anda kosong</p>
      </div>
    `;
    
    cartSubtotal.textContent = formatCurrency(0);
    cartTotal.textContent = formatCurrency(10000); // Shipping fee only
    
    return;
  }
  
  // Clear cart items
  cartItems.innerHTML = '';
  
  // Calculate subtotal
  let subtotal = 0;
  const shippingFee = 10000;
  
  // Add cart items
  window.cartItems.forEach(item => {
    subtotal += item.price;
    
    const cartItemElement = document.createElement('div');
    cartItemElement.className = 'cart-item';
    
    cartItemElement.innerHTML = `
      <div class="cart-item-image">
        ${item.designType === 'text' ? 
          `<div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; font-family: ${item.designFont || 'Arial'}; color: ${item.designColor || 'black'};">
            ${item.designText}
          </div>` :
          `<img src="${item.designImage}" alt="Design" style="width: 100%; height: 100%; object-fit: contain;">`
        }
      </div>
      <div class="cart-item-details">
        <div class="cart-item-title">${item.productName}</div>
        <div class="cart-item-meta">
          ${item.color}, ${item.size}, ${item.designTypeLabel}<br>
          Posisi: ${item.position}
        </div>
        <div class="cart-item-actions">
          <span class="cart-item-price">${formatCurrency(item.price)}</span>
          <button class="cart-item-remove" data-item-id="${item.id}">
            <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
            </svg>
          </button>
        </div>
      </div>
    `;
    
    cartItems.appendChild(cartItemElement);
  });
  
  // Add event listeners for remove buttons
  const removeButtons = cartItems.querySelectorAll('.cart-item-remove');
  removeButtons.forEach(button => {
    button.addEventListener('click', function() {
      const itemId = this.dataset.itemId;
      removeFromCart(itemId);
    });
  });
  
  // Update totals
  cartSubtotal.textContent = formatCurrency(subtotal);
  cartTotal.textContent = formatCurrency(subtotal + shippingFee);
}

// Add item to cart
function addToCart(item) {
  window.cartItems.push(item);
  
  // Update cart count
  document.getElementById('cartCount').textContent = window.cartItems.length;
  
  showToast('Produk berhasil ditambahkan ke keranjang');
}

// Remove item from cart
function removeFromCart(itemId) {
  window.cartItems = window.cartItems.filter(item => item.id !== itemId);
  
  // Update cart display
  updateCartItems();
}

// Checkout process
function checkout() {
  if (window.cartItems.length === 0) {
    showToast('Keranjang Anda kosong', 'error');
    return;
  }
  
  showToast('Terima kasih telah memesan!');
  
  // Clear cart
  window.cartItems = [];
  updateCartItems();
  
  // Close cart modal
  closeCartModal();
}

// ========== Preview Modal Functions ==========

// Setup preview modal
function setupPreviewModal() {
  const previewModal = document.getElementById('previewModal');
  const closePreviewBtn = document.getElementById('closePreviewBtn');
  const backToEditBtn = document.getElementById('backToEditBtn');
  const confirmAddToCartBtn = document.getElementById('confirmAddToCartBtn');
  
  // Close preview modal
  closePreviewBtn.addEventListener('click', function() {
    closePreviewModal();
  });
  
  // Close modal when clicking overlay
  previewModal.querySelector('.modal-overlay').addEventListener('click', function() {
    closePreviewModal();
  });
  
  // Back to edit button
  backToEditBtn.addEventListener('click', function() {
    closePreviewModal();
  });
  
  // Confirm add to cart button
  confirmAddToCartBtn.addEventListener('click', function() {
    confirmAddToCart();
  });
}

// Open preview modal
function openPreviewModal() {
  // Check if design is selected or text is entered
  if (!currentDesign && !currentTextDesign.text) {
    showToast('Silakan pilih atau upload desain terlebih dahulu', 'error');
    return;
  }
  
  const previewModal = document.getElementById('previewModal');
  const previewProductImage = document.getElementById('previewProductImage');
  const previewDesignOverlay = document.getElementById('previewDesignOverlay');
  const previewProductName = document.getElementById('previewProductName');
  const previewColor = document.getElementById('previewColor');
  const previewSize = document.getElementById('previewSize');
  const previewDesignType = document.getElementById('previewDesignType');
  const previewPosition = document.getElementById('previewPosition');
  const previewPrice = document.getElementById('previewPrice');
  
  // Update preview product image
  previewProductImage.src = getProductImageByTypeAndColor(currentProduct.type, currentProduct.color);
  
  // Update preview design overlay
  if (currentDesign && currentDesign.src) {
    previewDesignOverlay.innerHTML = `<img src="${currentDesign.src}" alt="Selected design">`;
  } else if (currentTextDesign.text) {
    previewDesignOverlay.innerHTML = `
      <div class="text-overlay" style="font-family: ${currentTextDesign.font}, sans-serif; color: ${currentTextDesign.color};">
        ${currentTextDesign.text}
      </div>
    `;
  } else {
    previewDesignOverlay.innerHTML = '';
  }
  
  // Update preview details
  previewProductName.textContent = `${getProductTypeText(currentProduct.type)} Premium`;
  previewColor.textContent = getColorText(currentProduct.color);
  previewSize.textContent = currentProduct.size.toUpperCase();
  previewDesignType.textContent = currentTextDesign.designType === 'sablon' ? 'Sablon' : 'Bordir';
  previewPosition.textContent = getPositionText(currentTextDesign.position);
  
  // Update price
  const price = calculatePrice(currentProduct.type, currentTextDesign.designType);
  previewPrice.textContent = formatCurrency(price);
  
  // Show modal
  previewModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Close preview modal
function closePreviewModal() {
  const previewModal = document.getElementById('previewModal');
  previewModal.classList.remove('active');
  document.body.style.overflow = '';
}

// Confirm add to cart
function confirmAddToCart() {
  const price = calculatePrice(currentProduct.type, currentTextDesign.designType);
  
  // Create cart item
  const cartItem = {
    id: generateId(),
    productName: `${getProductTypeText(currentProduct.type)} Premium`,
    productType: currentProduct.type,
    color: getColorText(currentProduct.color),
    size: currentProduct.size.toUpperCase(),
    position: getPositionText(currentTextDesign.position),
    designTypeLabel: currentTextDesign.designType === 'sablon' ? 'Sablon' : 'Bordir',
    designType: currentDesign ? 'image' : 'text',
    designImage: currentDesign ? currentDesign.src : '',
    designText: currentTextDesign.text,
    designFont: currentTextDesign.font,
    designColor: currentTextDesign.color,
    price: price
  };
  
  // Add to cart
  addToCart(cartItem);
  
  // Close preview modal
  closePreviewModal();
  
  // Open cart modal
  openCartModal();
}

// ========== Gallery Modal Functions ==========

// Setup gallery modal
function setupGalleryModal() {
  const galleryModal = document.getElementById('galleryModal');
  const closeGalleryBtn = document.getElementById('closeGalleryBtn');
  const cancelGalleryBtn = document.getElementById('cancelGalleryBtn');
  
  // Close gallery modal
  closeGalleryBtn.addEventListener('click', function() {
    closeGalleryModal();
  });
  
  // Close modal when clicking overlay
  galleryModal.querySelector('.modal-overlay').addEventListener('click', function() {
    closeGalleryModal();
  });
  
  // Cancel button
  cancelGalleryBtn.addEventListener('click', function() {
    closeGalleryModal();
  });
}

// Open gallery modal
function openGalleryModal() {
  const galleryModal = document.getElementById('galleryModal');
  galleryModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Close gallery modal
function closeGalleryModal() {
  const galleryModal = document.getElementById('galleryModal');
  galleryModal.classList.remove('active');
  document.body.style.overflow = '';
}

// ========== Contact Form ==========

// Setup contact form
function setupContactForm() {
  const contactForm = document.getElementById('contactForm');
  
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simple validation
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    if (!name || !email || !phone || !subject || !message) {
      showToast('Semua kolom wajib diisi', 'error');
      return;
    }
    
    // Here, we would typically send the form data to a server
    // Since we're not implementing the backend, we'll just show a success message
    showToast('Pesan Terkirim! Kami akan menghubungi Anda segera.');
    
    // Reset form
    contactForm.reset();
  });
}