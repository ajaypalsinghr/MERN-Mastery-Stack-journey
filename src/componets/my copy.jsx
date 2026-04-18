import React, { useState } from 'react';

function My() {
  // 1. Main Data State
  const [data, setData] = useState([
    { id: 1, name: "ajay", price: 234 },
    { id: 2, name: "vijay", price: 646 },
    { id: 3, name: "kavi", price: 75 },
  ]);

  // 2. Form Inputs for NEW items
  const [inputName, setInputName] = useState('');
  const [inputPrice, setInputPrice] = useState('');

  // 3. State to track manual price input for each user
  // Hum ek object use karenge: { id: price_value }
  const [editPrices, setEditPrices] = useState({});

  // Logic: Naya item add karna (With Father Name)
  const handleAddItem = (e) => {
    e.preventDefault();
    if (!inputName || !inputPrice) return alert("Fields fill karein!");

    const newItem = {
      id: Date.now(),
      name: inputName,
      price: parseInt(inputPrice),
      fatherName: "Mr. X" // Spread operator logic for new property
    };

    setData([...data, newItem]); // Spread operator for array
    setInputName('');
    setInputPrice('');
  };

  // Logic: Khud se input dekar Price badalna
  const handleManualUpdate = (id) => {
    const newPriceValue = editPrices[id]; // User ne jo input diya
    
    if (!newPriceValue) return alert("Pehle price likhein!");

    const updatedData = data.map((item) => {
      if (item.id === id) {
        // Spread operator use karke price overwrite karna
        return { ...item, price: parseInt(newPriceValue) };
      }
      return item;
    });
    setData(updatedData); // Naya array state mein set
    
    // Update ke baad input saaf karna
    setEditPrices({ ...editPrices, [id]: "" });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Billing App (Custom Price Update)</h2>

      {/* --- ADD NEW ITEM FORM --- */}
      <form onSubmit={handleAddItem} style={{ marginBottom: '30px' }}>
        <input placeholder="Name" value={inputName} onChange={(e) => setInputName(e.target.value)} />
        <input placeholder="Price" type="number" value={inputPrice} onChange={(e) => setInputPrice(e.target.value)} />
        <button type="submit">Add New User</button>
      </form>

      {/* --- LIST DISPLAY --- */}
      <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
        {data.map((item) => (
          <div key={item.id} style={{ border: '1px solid #333', padding: '10px', borderRadius: '8px' }}>
            <p><strong>Name:</strong> {item.name}</p>
            <p><strong>Current Price:</strong> ₹{item.price}</p>
            {item.fatherName && <p><strong>Father:</strong> {item.fatherName}</p>}

            {/* --- CUSTOM PRICE INPUT --- */}
            <div style={{ marginTop: '10px' }}>
              <input 
                type="number" 
                placeholder="New Price?" 
                value={editPrices[item.id] || ""} 
                onChange={(e) => setEditPrices({ ...editPrices, [item.id]: e.target.value })}
                style={{ width: '80px', marginRight: '5px' }}
              />
              <button onClick={() => handleManualUpdate(item.id)}>Update</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default My;