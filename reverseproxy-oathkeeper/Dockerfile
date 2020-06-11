FROM oryd/oathkeeper:v0.38.2-beta.1

ADD config.yaml /config.yaml
ADD rules.json /rules.json
ADD jwks.json /jwks.json

CMD [ "serve"]