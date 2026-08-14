"use client";
import { createContext, useContext, ReactNode, useState, useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getUserAPi, postDeviceLogoutApi } from "@/api-endpoints/authendication";
import { getDeviceId } from "@/lib/device";
import { auth } from "@/lib/firebase";

interface UserContextType {
  user: any;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: any;
  refreshUser: () => void;
  logout: (vendorId?: any) => Promise<void>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [userId, setUserId] = useState<string | null>(null);
  const queryClient = useQueryClient();

  const refreshUser = () => {
    const storedUserId = localStorage.getItem('userId');
    setUserId(storedUserId);
  };

  useEffect(() => {
    refreshUser();
  }, []);

  const { data, isLoading, error } = useQuery({
    queryKey: ["gerUserData", userId],
    queryFn: () => getUserAPi(`${userId}`),
    enabled: !!userId
  });

  if (data) {
    if (typeof window !== 'undefined') {
      localStorage.setItem('userName', data?.data?.name);
      localStorage.setItem('email', data?.data?.email);
    }
  }

  const logout = async (vendorIdParam?: any) => {
    const currentUserId = userId || (typeof window !== 'undefined' ? localStorage.getItem('userId') : null);
    const deviceId = getDeviceId();
    const vendorId = vendorIdParam || 157;
    try {
      if (currentUserId) {
        await postDeviceLogoutApi({
          vendor_id: Number(vendorId) || vendorId,
          device_id: deviceId,
          user_id: Number(currentUserId) || currentUserId
        });
      }
      try {
        await auth.signOut();
      } catch (e) {
        console.warn("Firebase signout error", e);
      }
    } catch (err) {
      console.error("Device logout error:", err);
    } finally {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('userId');
        localStorage.removeItem('userName');
        localStorage.removeItem('email');
        localStorage.removeItem('cartId');
        localStorage.removeItem('token');
      }
      setUserId(null);
      queryClient.removeQueries({ queryKey: ["gerUserData"] });
    }
  };

  return (
    <UserContext.Provider
      value={{
        user: data || [],
        isAuthenticated: !!data,
        isLoading,
        error,
        refreshUser,
        logout
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}

