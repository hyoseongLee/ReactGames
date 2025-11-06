import { create } from "zustand";

const useSearchStore = create((set) => ({
  searchText: "", // 현재 검색어 상태
  setSearchText: (text) => set({ searchText: text }), // 검색어 갱신 함수
}));


export default useSearchStore;