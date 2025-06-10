import { Sheet, SheetClose } from "../../components/ui/sheet";
import { useCartStore } from "../../Store/useCartStore";

function Cart() {
  const { items, removeItem, clearCart } = useCartStore();

  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <Sheet>
      <SheetClose>
        <div className="max-w-3xl mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

          {items.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            <>
              <ul className="space-y-4">
                {items.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-center justify-between bg-white shadow p-4 rounded-lg"
                  >
                    <div>
                      <h2 className="font-semibold text-lg">{item.name}</h2>
                      <p className="text-sm text-gray-600">
                        Quantity: {item.quantity} × ₹{item.price}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <p className="font-semibold">
                        ₹{item.price * item.quantity}
                      </p>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:underline text-sm font-semibold cursor-pointer"
                      >
                        Remove
                      </button>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex justify-between items-center border-t pt-4">
                <span className="text-xl font-bold">
                  Total: ₹{totalPrice.toFixed(2)}
                </span>
                <button
                  onClick={clearCart}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-semibold cursor-pointer"
                >
                  Clear Cart
                </button>
              </div>
            </>
          )}
        </div>
      </SheetClose>
    </Sheet>
  );
}

export default Cart;
