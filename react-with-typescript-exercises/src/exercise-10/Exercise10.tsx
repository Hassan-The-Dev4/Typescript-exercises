import { useState } from "react";


// 1 Create useNumberStorage
export function useNumberStorage(
  key: string = "number_storage",
  initialValue: number = 0
): [number, (val: number) => void] {
  const [value, setValue] = useState<number>(() => {
    try {
      const stored = localStorage.getItem(key);
      return stored !== null ? Number(stored) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const updateValue = (val: number): void => {
    try {
      setValue(val);
      localStorage.setItem(key, String(val));
    } catch (error) {
      console.error("Failed to save number to localStorage:", error);
    }
  };

  return [value, updateValue];
}

export function NumberStorageDemo() {
  const [count, setCount] = useNumberStorage("demo_number_storage", 0);

  return (
    <div>
      <p>Stored Number: {count}</p>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(count + 1)} style={{ marginLeft: "8px" }}>
        Increment
      </button>
      <button onClick={() => setCount(0)} style={{ marginLeft: "8px" }}>
        Reset
      </button>
    </div>
  );
}


// 2 Create useSettingsStorage

export interface Settings {
  language: string;
  notifications: boolean;
}


export function useSettingsStorage(
  key: string = "settings_storage",
  initialValue: Settings = { language: "English", notifications: true }
): [Settings, (val: Settings) => void] {
  const [settings, setSettings] = useState<Settings>(() => {
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const updateSettings = (val: Settings): void => {
    try {
      setSettings(val);
      localStorage.setItem(key, JSON.stringify(val));
    } catch (error) {
      console.error("Failed to save settings to localStorage:", error);
    }
  };

  return [settings, updateSettings];
}

export function SettingsStorageDemo() {
  const [settings, setSettings] = useSettingsStorage("demo_settings_storage", {
    language: "English",
    notifications: true,
  });

  return (
    <div>
      <p>Language: {settings.language}</p>
      <p>Notifications: {settings.notifications ? "Enabled" : "Disabled"}</p>
      <button
        onClick={() =>
          setSettings({
            ...settings,
            language: settings.language === "English" ? "Spanish" : "English",
          })
        }
      >
        Toggle Language
      </button>
      <button
        onClick={() =>
          setSettings({
            ...settings,
            notifications: !settings.notifications,
          })
        }
        style={{ marginLeft: "8px" }}
      >
        Toggle Notifications
      </button>
    </div>
  );
}


// 3 Convert to Generic: useLocalStorage<T>


export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (val: T) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setValue = (val: T): void => {
    try {
      setStoredValue(val);
      localStorage.setItem(key, JSON.stringify(val));
    } catch (error) {
      console.error("Failed to save generic value to localStorage:", error);
    }
  };

  return [storedValue, setValue];
}

interface UserProfile {
  name: string;
  theme: "light" | "dark";
}

export function GenericStorageDemo() {
  const [profile, setProfile] = useLocalStorage<UserProfile>(
    "demo_generic_profile",
    {
      name: "Hassan",
      theme: "dark",
    }
  );

  return (
    <div>
      <p>Profile Name: {profile.name}</p>
      <p>Theme: {profile.theme}</p>
      <button
        onClick={() =>
          setProfile({
            ...profile,
            theme: profile.theme === "dark" ? "light" : "dark",
          })
        }
      >
        Toggle Theme
      </button>
    </div>
  );
}


// Wrap all questions 

export function Exercise10() {
  return (
    <div>
      <h1>Exercise 10</h1>

      <section>
        <h2>useNumberStorage</h2>
        <NumberStorageDemo />
      </section>

      <section>
        <h2>useSettingsStorage</h2>
        <SettingsStorageDemo />
      </section>

      <section>
        <h2>Generic useLocalStorage&lt;T&gt;</h2>
        <GenericStorageDemo />
      </section>
    </div>
  );
}

export default Exercise10;
