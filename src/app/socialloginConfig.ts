import {SocialLoginModule,AuthServiceConfig,GoogleLoginProvider} from 'angular5-social-login';
  
  export function getAuthServiceConfigs() {
    let config = new AuthServiceConfig([
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider('141455832430-53t31mclpedpcpdg4qpv4jd96n6kb3r0.apps.googleusercontent.com')
      }
    ]);
  
    return config;
  }