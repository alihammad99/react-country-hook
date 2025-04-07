# React Country Hook

A React.js Hook that provides comprehensive information for 196 countries based on visitors' timezone or custom search criteria. Easily access country names (in English and Arabic), phone codes, timezones, and more.

## Installation

```bash
npm install react-country-hook
# or
yarn add react-country-hook
# or
bun add react-country-hook
```

## Usage

### Basic Usage (Auto-detect by timezone)

```jsx
import { useCountry } from "react-country-hook";

function MyComponent() {
  const { name, callCode, timezone } = useCountry();

  if (!name) return <div>Loading...</div>;

  return (
    <div>
      <h1>Your Country: {name}</h1>
      <p>Phone Code: +{callCode}</p>
      <p>Timezone: {timezone}</p>
    </div>
  );
}
```

### Search by Specific Criteria

```jsx
import { useCountry } from "react-country-hook";

function MyComponent() {
  // Search by country name
  const countryByName = useCountry({ name: "Germany" });

  // Search by Arabic country name
  const countryByArabicName = useCountry({ nameAr: "العراق" });

  // Search by phone code
  const countryByPhone = useCountry({ callCode: "1" });

  // Search by timezone
  const countryByTimezone = useCountry({ timezone: "America/New_York" });

  // Search by flag code
  const countryByFlag = useCountry({ flagCode: "US" });
}
```

### Using Default Country

You can specify a default country that will be used if no country is found matching the auto search criteria. The default can be specified using any of these values:

- Country name (in English or Arabic)
- Call code
- Flag code
- Timezone

```jsx
import { useCountry } from "react-country-hook";

function MyComponent() {
  // Using default country by name
  const countryWithDefault = useCountry({
    timezone: "Asia/Baghdad",
  });

  // Using default country by flag code
  const countryWithDefaultFlag = useCountry({
    default: "US",
  });
}
```

## Return Data Structure

The hook returns a country object with the following properties:

```typescript
interface CountryType {
  name: string; // Country name in English
  nameAr: string; // Country name in Arabic
  timezone: string; // Country timezone
  flagCode: string; // Two-letter country code
  prefix: string; // Phone number prefix
  callCode: string; // International calling code
  phoneMax: number; // Maximum phone number length
  phoneMin: number; // Minimum phone number length
}
```

## Search Criteria

You can search for a country using any of these properties:

```typescript
interface PropsType {
  name?: string;
  nameAr?: string;
  timezone?: string;
  flagCode?: string;
  callCode?: string;
}
```

## License

ISC

## Author

Ali Hammad
