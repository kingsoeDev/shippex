// Define a type for API endpoints
type Endpoint = string;

// Define a type for the request body
type RequestBody = Record<string, any> | FormData;
var apiUrl = process.env.EXPO_PUBLIC_API_URL || "https://shippex-demo.bc.brandimic.com/api/method";
// GET request function
export const processGetRequest = (endpoint: Endpoint): Promise<Response> => {
  return fetch(`${apiUrl}${endpoint}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
    },
  });
};

// POST request function
export const processPostRequest = (endpoint: Endpoint, body: any): Promise<Response> => {
  return fetch(`${apiUrl}${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
};

// POST form data request function
export const processPostFormRequest = async (
  endpoint: Endpoint,
  formData: FormData | any
): Promise<Response> => {

  const body = formData instanceof FormData ? formData : new FormData();

  if (!(formData instanceof FormData)) {
    Object.keys(formData).forEach((key) => {
      body.append(key, formData[key]);
    });
  }

  return fetch(`${apiUrl}${endpoint}`, {
    method: 'POST',
    headers: {
    'Accept': 'multipart/form-data', 
    },
    body: body,
  });
};


export const processGetFormRequest = async (
  endpoint: string, //  Endpoint is a string for the URL path
  formData: Record<string, any>
): Promise<Response> => {

  // Convert the form data into query parameters
  const queryString = new URLSearchParams(formData).toString();
  
  // Construct the full URL with the query string
  const urlWithParams = `${apiUrl}${endpoint}?${queryString}`;

  return fetch(urlWithParams, {
    method: 'GET',
    headers: {
      'Accept': 'application/json', 
    },
  });
};
