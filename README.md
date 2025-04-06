# React Country Hook

A React.js Hook that provides country information for visitors based on their timezone or custom search criteria.

## Installation

```bash
npm install react-country-hook
# or
yarn add react-country-hook
```

## Usage

### Basic Usage (Auto-detect by timezone)

```jsx
import { useCountry } from "react-country-hook";

function MyComponent() {
  const country = useCountry();

  if (!country) return <div>Loading...</div>;

  return (
    <div>
      <h1>Your Country: {country.name}</h1>
      <p>Phone Code: +{country.callCode}</p>
      <p>Timezone: {country.timezone}</p>
    </div>
  );
}
```

### Search by Specific Criteria

```jsx
import { useCountry } from "react-country-hook";

function MyComponent() {
  // Search by country name
  const countryByName = useCountry({ name: "United States" });

  // Search by phone code
  const countryByPhone = useCountry({ callCode: 1 });

  // Search by timezone
  const countryByTimezone = useCountry({ timezone: "America/New_York" });

  // Search by flag code
  const countryByFlag = useCountry({ flagCode: "US" });
}
```

## Return Data Structure

The hook returns a country object with the following properties:

```typescript
interface DataType {
  name: string; // Country name in English
  nameAr: string; // Country name in Arabic
  timezone: string; // Country timezone
  flagCode: string; // Two-letter country code
  prefix: number; // Phone number prefix
  callCode: number; // International calling code
  phoneMax: number; // Maximum phone number length
  phoneMin: number; // Minimum phone number length
}
```

## Search Criteria

You can search for a country using any of these properties:

```typescript
interface FindProps {
  name?: string;
  nameAr?: string;
  timezone?: string;
  flagCode?: string;
  prefix?: number;
  callCode?: number;
  phoneMax?: number;
  phoneMin?: number;
}
```

## Error Handling

The hook returns `null` if no country is found matching the criteria. Always check for null before using the returned data:

```jsx
function MyComponent() {
  const country = useCountry({ name: "NonExistentCountry" });

  if (!country) {
    return <div>Country not found</div>;
  }

  return <div>Found: {country.name}</div>;
}
```

## License

ISC

## Author

Ali Hammad
