import axios from 'axios';

export function findProductByCode(code) {
  return axios.get('http://localhost:4000/api/products/product', {
    params: { code },
  });
}

export function createInvoice() {
  return axios.post('http://localhost:4000/api/invoices/invoice');
}

export function REGISTERSALE(
  invoice,
  product,
  description,
  amount,
  subtotal,
  cost_price,
) {
  return axios.post('http://localhost:4000/api/sales/sale', {
    invoice,
    product,
    description,
    amount,
    subtotal,
    cost_price,
  });
}

export function undoSales(ids) {
  const id_sales = JSON.stringify(ids);
  return axios.delete('http://localhost:4000/api/sales/sales', {
    data: { id_sales },
  });
}

export function findProductByDescription(description) {
  return axios.get(
    'http://localhost:4000/api/products/productdescription',
    {
      params: { description },
    },
  );
}
