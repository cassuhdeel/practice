
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:5000"

const headers = new Headers();
headers.append("Content-Type", "application/json");


async function fetchData(url, options, onCancel) {
    try {
        const res = await fetch(url, options)
        if (res.status === 204) {
            return null;
        }

        const payload = await response.json();

        if (payload.error) {
          return Promise.reject({ message: payload.error });
        }
        return payload.data;

    } catch (error) {
        if (error.name !== 'AbortError') {
            console.error(error.stack);
            throw error;
        }
        return Promise.resolve(onCancel);
    }
}


export async function listTodos(params, signal) {
    const url = new URL(`${API_BASE_URL}/todo`);
  
    if (params) {
      Object.entries(params).forEach(([key, value]) =>
        url.searchParams.append(key, value.toString())
      );
    }
  
    return await fetchData(url, { headers, signal, method: "GET" }, []);
  }


  export async function createTodo(todo, signal) {
    const url = `${API_BASE_URL}/todo`;
    const body = JSON.stringify({ data: todo });
    return await fetchData(url, { headers, signal, method: "POST", body }, []);
  }
  
  