# Authentication

Authentication can be broadly classified in 2 types

- Stateful auth
  User <--> Server(maintaining state)

  User --> linkedin.com(website) --> linkedin.com(server)

- server will maintain a session by setting a cookie(token - hmac/jwt) on the browser
- assume user navigate to notifications -> cookie will get attached to the request
- user will logout, /logout, server will remove cookie from your browser - CSRF
- make cookie as httponly

- Stateless auth
  User <--> Server

  - user will login with right credentials

    - in response -> server will return a token

      - store this token in localstorage - XSS attack

    - /dashboard -> throw error -> unauthorized
      - get token from localstorage
      - attach to the headers
      - trigger a call
