// types/prisma.ts
export type ObjectIdString = string;

export enum Role { ADMIN = "ADMIN", MANAGER = "MANAGER", CASHIER = "CASHIER", KITCHEN = "KITCHEN" }
export enum OrderStatus { PENDING="PENDING", CONFIRMED="CONFIRMED", PREPARING="PREPARING", READY="READY", COMPLETED="COMPLETED", CANCELLED="CANCELLED" }
export enum OrderType { DINE_IN="DINE_IN", TAKEAWAY="TAKEAWAY", DELIVERY="DELIVERY" }
export enum PaymentMethod { CASH="CASH", CARD="CARD", BANK_TRANSFER="BANK_TRANSFER", DIGITAL_WALLET="DIGITAL_WALLET" }
export enum PaymentStatus { PENDING="PENDING", COMPLETED="COMPLETED", FAILED="FAILED", REFUNDED="REFUNDED" }
export enum ItemStatus { PENDING="PENDING", PREPARING="PREPARING", READY="READY", SERVED="SERVED" }
export enum CustomizationType { SINGLE_SELECT="SINGLE_SELECT", MULTI_SELECT="MULTI_SELECT", TEXT_INPUT="TEXT_INPUT", NUMBER_INPUT="NUMBER_INPUT" }
export enum ShiftStatus { ACTIVE="ACTIVE", CLOSED="CLOSED" }

export type Image = { url: string; key?: string }

export interface User {
  id: ObjectIdString
  email: string
  password?: string
  name: string
  role: Role
  isActive: boolean
  branchId?: ObjectIdString
  createdAt: string
  updatedAt: string
}

export interface Branch {
  id: ObjectIdString
  name: string
  address: string
  phone: string
  isActive: boolean
  createdAt: string
  updatedAt: string
}

export interface Category {
  id: ObjectIdString
  name: string
  nameAr: string
  nameTr?: string
  description?: string
  descriptionAr?: string
  descriptionTr?: string
  image?: Image
  isActive: boolean
  sortOrder: number
  createdAt: string
  updatedAt: string
}

export interface Product {
  id: ObjectIdString
  name: string
  nameAr: string
  nameTr?: string
  description?: string
  descriptionAr?: string
  descriptionTr?: string
  price: number
  cost?: number
  sku?: string
  barcode?: string
  image: Image
  weight?: number
  unit?: string
  ingredients?: string[]
  allergens?: string[]
  expiryDays?: number
  isActive: boolean
  isPopular: boolean
  categoryId: ObjectIdString
  branchId?: ObjectIdString
  createdAt: string
  updatedAt: string
}

export interface ProductCustomization {
  id: ObjectIdString
  name: string
  nameAr?: string
  type: CustomizationType
  options: any
  priceChange: number
  productId: ObjectIdString
  createdAt: string
  updatedAt: string
}

export interface Customer {
  id: ObjectIdString
  name: string
  phone?: string
  email?: string
  address?: string
  birthDate?: string
  points?: number
  totalSpent?: number
  visits?: number
  isActive?: boolean
  createdAt?: string
  updatedAt?: string
}

export interface OrderItem {
  id: ObjectIdString
  quantity: number
  unitPrice: number
  totalPrice: number
  notes?: string
  customizations?: any
  status: ItemStatus
  orderId: ObjectIdString
  productId: ObjectIdString
  createdAt?: string
  updatedAt?: string
}

export interface Order {
  id: ObjectIdString
  orderNumber: string
  status: OrderStatus
  type: OrderType
  subtotal: number
  tax: number
  discount: number
  total: number
  paymentMethod: PaymentMethod
  paymentStatus: PaymentStatus
  notes?: string
  customerId?: ObjectIdString
  userId?: ObjectIdString
  branchId?: ObjectIdString
  createdAt?: string
  updatedAt?: string
  items?: OrderItem[]
}

export interface Payment {
  id: ObjectIdString
  amount: number
  method: PaymentMethod
  status: PaymentStatus
  reference?: string
  notes?: string
  orderId: ObjectIdString
  createdAt?: string
  updatedAt?: string
}

export interface Inventory {
  id: ObjectIdString
  currentStock: number
  minStock?: number
  maxStock?: number
  unit?: string
  lastRestocked?: string
  productId: ObjectIdString
  branchId?: ObjectIdString
  createdAt?: string
  updatedAt?: string
}
