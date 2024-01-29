/**
 * Функции написанные здесь пригодятся на последующих уроках
 * С помощью этих функций мы будем добавлять элементы в список для проверки динамической загрузки
 * Поэтому в идеале чтобы функции возвращали случайные данные, но в то же время не абракадабру.
 * В целом сделайте так, как вам будет удобно.
 * */

/**
 * Нужно создать тип Category, он будет использоваться ниже.
 * Категория содержит
 * - id (строка)
 * - name (строка)
 * - photo (строка, необязательно)
 */
type Category = {
    id: string,
    name: string,
    photo?: string
}

 /* Продукт (Product) содержит
 * - id (строка)
 * - name (строка)
 * - photo (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - oldPrice (число, необязательно)
 * - price (число)
 * - category (Категория)
 */

 type Product = {
    id: string,
    name: string,
    photo: string,
    desc?: string,
    createdAt: string,
    oldPrice?: number,
    price: number,
    category: Category
 }

 /* Операция (Operation) может быть либо тратой (Cost), либо доходом (Profit)
 *
 * Трата (Cost) содержит
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Cost')
 *
 * Доход (Profit) содержит
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Profit')
 * */

type Cost = {
    id: string,
    name: string,
    desc?: string,
    createdAt: string,
    amount: number,
    category: Category,
    type: 'Cost'
}

type Profit = {
    id: string,
    name: string,
    desc?: string,
    createdAt: string,
    amount: number,
    category: Category,
    type: 'Profit'
}

type Operation = Cost | Profit;

/**
 * Создает случайный продукт (Product).
 * Принимает дату создания (строка)
 * */
 export const createRandomProduct = (createdAt: string): Product => {
    const timestamp = new Date(createdAt).getTime();
    const randomNum = Math.floor(Math.random() * 1000000); 

    const productId = `${timestamp}-${randomNum}`;
    const categoryId = `${randomNum}-${timestamp}`;

    let price = Math.random();
    if(price < 0){
        price *= -1;
    }

    return {
        id: productId,
        name: 'Product_' + productId,
        photo: 'Photo_' + timestamp,
        createdAt: createdAt,
        price: price,
        category: {
            id: categoryId,
            name: 'Category_' + categoryId
        }
    }
 };

/**
 * Создает случайную операцию (Operation).
 * Принимает дату создания (строка)
 * */
 export const createRandomOperation = (createdAt: string): Operation => {
    const timestamp = new Date(createdAt).getTime();
    const randomNum = Math.floor(Math.random() * 1000000); 

    const operationId = `${timestamp}-${randomNum}`;
    const categoryId = `${randomNum}-${timestamp}`;

    const amount = Math.random();

    return {
        id: operationId,
        name: 'Operation_' + operationId,
        createdAt: createdAt,
        amount: amount,
        category: {
            id: categoryId,
            name: 'Category_' + categoryId
        },
        type: amount < 0 ? 'Cost' : 'Profit'
    }
 };
