import { createContext, useEffect, useState } from "react";
import { iAds, iChildren } from "./interfaces";
import { api } from "../../services/api";

type adContextProps = {
  ad: iAds[] | [];
  setAd: React.Dispatch<React.SetStateAction<iAds[] | []>>;
  createAd: (id: number | null, formData: iAds) => void;
  updateAd: (id: number | null, formData: iAds) => void;
  listMyAds: (id: number | null) => void;
  listAllAds: () => void;
};

const AdContext = createContext<adContextProps>({} as adContextProps);

const AdProvider = ({ children }: iChildren) => {
  const [ad, setAd] = useState<iAds[] | []>([]);

  useEffect(() => {
    const Ads = async () => {
      try {
        const response = await api.get("/ads");
        setAd(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    Ads();
  }, []);

  const createAd = async (id: number | null, data: iAds) => {
    const token = localStorage.getItem("@TOKEN");
    try {
      const response = await api.post(`/ads/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setAd(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const listAllAds = async () => {
    try {
      const response = await api.get("/ads")
      setAd(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const listMyAds = async (id: number | null) => {
    const token = localStorage.getItem("@TOKEN")
    try {
      const response = await api.get(`/ads/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setAd(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const updateAd = async (id: number | null, data: iAds) => {
    const token = localStorage.getItem("@TOKEN");
    try {
      const response = await api.patch(`/ads/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const newAd = ad.map((add) => {
        if (add.id === id) {
          return response.data;
        } else {
          return add;
        }
      });
      setAd(newAd);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <AdContext.Provider value={{ ad, setAd, createAd, updateAd, listMyAds, listAllAds }}>
      {children}
    </AdContext.Provider>
  );
};

export default AdProvider;
export { AdContext, AdProvider };
