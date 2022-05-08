FROM mcr.microsoft.com/dotnet/aspnet:6.0-alpine as base 

WORKDIR /app 

ENV ASPNETCORE_URLS http://+:5000 

EXPOSE 5000 

FROM mcr.microsoft.com/dotnet/sdk:6.0-alpine as publish 

WORKDIR /app

COPY ./blog.csproj /app/

RUN dotnet restore "blog.csproj"

COPY ./ ./

RUN dotnet publish "blog.csproj" -c Release -o /app/publish

FROM base as final

RUN apk update && \
    apk add --no-cache tzdata

ENV TZ=Asia/Bangkok

WORKDIR /app

COPY --from=publish /app/publish ./

CMD ["dotnet", "blog.dll"]