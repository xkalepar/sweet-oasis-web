import { createContext, useContext, useEffect, useMemo, useState, ReactNode } from 'react';

const FAVS_KEY = 'wb_favs_v1';

type FavsContextValue = {
  ids: Set<string>;
  toggle: (id: string) => void;
  has: (id: string) => boolean;
};

const FavsContext = createContext<FavsContextValue | undefined>(undefined);

function load(): Set<string> {
  try { const raw = localStorage.getItem(FAVS_KEY); if (raw) return new Set(JSON.parse(raw)); } catch {}
  return new Set();
}

export function FavsProvider({ children }: { children: ReactNode }) {
  const [ids, setIds] = useState<Set<string>>(load);

  useEffect(() => {
    try { localStorage.setItem(FAVS_KEY, JSON.stringify(Array.from(ids))); } catch {}
  }, [ids]);

  const value = useMemo(() => ({
    ids,
    toggle: (id: string) => setIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    }),
    has: (id: string) => ids.has(id)
  }), [ids]);

  return <FavsContext.Provider value={value}>{children}</FavsContext.Provider>;
}

export function useFavs() {
  const ctx = useContext(FavsContext);
  if (!ctx) throw new Error('useFavs must be used within FavsProvider');
  return ctx;
}
