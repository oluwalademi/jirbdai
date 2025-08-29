// lib/ojs/client.ts
export class Client {
  private endpoint = "";
  private token = "";

  setEndpoint(url: string) {
    this.endpoint = url;
    return this;
  }

  setKey(token: string) {
    this.token = token;
    return this;
  }

  async get(path: string) {
    const res = await fetch(`${this.endpoint}${path}`, {
      headers: {
        Authorization: `Bearer ${this.token}`,
        Accept: "application/json",
      },
    });
    if (!res.ok) throw new Error("API request failed");
    return res.json();
  }
}
