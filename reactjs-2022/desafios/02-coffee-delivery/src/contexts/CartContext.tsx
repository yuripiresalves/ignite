import { ReactNode, createContext, useState } from 'react';
import { toast } from 'react-toastify';

interface Item {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartContextType {
  items: Item[];
  totalPriceItems: number;
  shipping: number;
  setItems: (items: Item[]) => void;
  addItem: (item: Item) => void;
  removeItem: (id: number) => void;

  clearCart: () => void;
}

export const CartContext = createContext({} as CartContextType);

interface CartProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartProviderProps) {
  const storedItemsAsJSON = localStorage.getItem('@coffee-delivey:cart-1.0.0');
  const [items, setItems] = useState<Item[]>(
    storedItemsAsJSON ? JSON.parse(storedItemsAsJSON) : []
  );

  const shipping = 0; //3.5;
  const totalPriceItems = items.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  function addItem(item: Item) {
    if (items.some((i) => i.id === item.id)) {
      const newItems = items.map((i) => {
        if (i.id === item.id) {
          i.quantity += item.quantity;
        }

        return i;
      });

      setItems(newItems);
      const newItemsAsJSON = JSON.stringify(newItems);
      localStorage.setItem('@coffee-delivey:cart-1.0.0', newItemsAsJSON);
      toast('Item adicionado ao carrinho!', {
        position: 'top-center',
        theme: 'dark',
        style: {
          background: '#fff',
          color: '#000',
        },
        icon: '🛒',
      });
      return;
    }

    setItems([...items, item]);
    const newItemsAsJSON = JSON.stringify([...items, item]);
    localStorage.setItem('@coffee-delivey:cart-1.0.0', newItemsAsJSON);
    toast('Item adicionado ao carrinho!', {
      position: 'top-center',
      theme: 'dark',
      style: {
        background: '#fff',
        color: '#000',
      },
      icon: '🛒',
    });
  }

  function removeItem(id: number) {
    const filteredItems = items.filter((item) => item.id !== id);

    setItems(filteredItems);
    const filteredItemsAsJSON = JSON.stringify(filteredItems);
    localStorage.setItem('@coffee-delivey:cart-1.0.0', filteredItemsAsJSON);
    toast('Item removido do carrinho!', {
      position: 'top-center',
      theme: 'dark',
      style: {
        background: '#fff',
        color: '#000',
      },
      icon: '🛒',
    });
  }

  function clearCart() {
    setItems([]);
    localStorage.removeItem('@coffee-delivey:cart-1.0.0');
  }

  return (
    <CartContext.Provider
      value={{
        items,
        totalPriceItems,
        shipping,
        addItem,
        removeItem,
        setItems,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
