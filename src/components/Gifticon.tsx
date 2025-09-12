import { Gift as GiftIcon } from "lucide-react";
import Navbar from "./Drawer";
import { useState } from "react";

const Gift = () => {
  const [modal, setModal] = useState(false);
  return (
    <div>
      <div className="fixed bottom-4 right-4 z-50 flex">
        <button
          onClick={() => setModal(true)}
          className="flex items-center gap-2 px-4 py-2 bg-wedding-terracotta-500 text-white rounded-full shadow-lg shadow-black/20 hover:bg-wedding-terracotta-600 transition-transform transform hover:scale-105 active:scale-95"
        >
          <GiftIcon className="w-5 h-5" />
          <span className="font-semibold text-sm">Give a Gift</span>
        </button>
      </div>

      {modal && <Navbar setModal={setModal} modal={modal}/>}
    </div>
  );
};

export default Gift;
