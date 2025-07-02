import { create } from "zustand";

const useStore = create((set) => ({
  items: [],
  selectedItem: null,
  person: { name: "", raza: "", ki: 0 },
  setItems: (data) => set({ items: data }),
  setSelectedItem: (item) => set({ selectedItem: item }),
  setPerson: (person) => set({ person }),
}));

export default useStore;
