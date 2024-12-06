```javascript
// pages/index.js
export default async function Home() {
  const MyComponent = dynamic(() => import('./my-component'), { ssr: false }); // Dynamic import
  const data = await fetchData();

  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <MyComponent data={data} />
    </div>
  );
}

// Helper Function to fetch data
async function fetchData() {
  const res = await fetch('/api/data');
  return res.json();
}

// pages/api/data.js
export default function handler(req, res) {
  res.status(200).json({ data: 'Some data' });
}

// components/my-component.js
function MyComponent({ data }) {
  return <div>Data: {data.data}</div>  
}
```