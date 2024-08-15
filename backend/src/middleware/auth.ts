import { auth } from "express-oauth2-jwt-bearer";

const jwtCheck = auth({
    audience: 'OceanFood-eats-api',
    issuerBaseURL: 'https://dev-bgh35dw0tdajy6tw.us.auth0.com/',
    tokenSigningAlg: 'RS256'
  });