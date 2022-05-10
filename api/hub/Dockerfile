FROM mcr.microsoft.com/dotnet/aspnet:6.0-alpine as base 

LABEL MAINTAINER="13angs" \
    name="Romdon Uma" \
    version="0.0.1"

# CREATE AND CD INTO DIR
WORKDIR /app

# SETUP PRODUCTION ENV
ENV ASPNETCORE_URLS http://+:5100

EXPOSE 5100

# SECOND STAGE
FROM mcr.microsoft.com/dotnet/sdk:6.0-alpine as builder

WORKDIR /app

COPY ./hub.csproj /app/

RUN dotnet restore "hub.csproj"

COPY ./ ./

RUN dotnet build "hub.csproj" -c Release -o /app/build

# THIRD STAGE BUILD
FROM builder as publish

RUN dotnet publish "hub.csproj" -c Release -o /app/publish

FROM base as final

RUN apk update && \
    apk add --no-cache tzdata

ENV TZ=Asia/Bangkok

WORKDIR /app

# COPY --from=builder /app/efbundle ./

COPY --from=publish /app/publish ./

# CMD ["/bin/bash", "-c", "/app/efbundle && dotnet \"hub.dll\""]
CMD ["dotnet", "hub.dll"]

