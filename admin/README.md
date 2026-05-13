Frontend 
For qr code generation-qrcode.react
npm install qrcode.react
QR Should Contain(customer app URL + table token/http://localhost:5174/menu/abc123)


------------------------------------------------------------------------------------------------------------------------------------------
Complete Login Flow
-------------------
Frontend Login Form
        ↓
Axios API Call
        ↓
Express Route
        ↓
Controller
        ↓
Prisma Query
        ↓
MySQL Database
        ↓
Password Verification
        ↓
JWT Token
        ↓
Response
        ↓
Frontend Stores Token
        ↓
Redirect Dashboard
------------------------------------------------------------------------------------------------------------------------------------------
Backend
for unique qr code uuid is used:-
npm install uuid
npm install -D @types/uuid