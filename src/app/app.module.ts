// SERVICES (PROVIDERS)
import { PokemonService } from './services/pokemon.service';
// MODULES(IMPORTS)
import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
// COMPONENTS(DECLARATIONS)
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// COMPONENTS(BOOTSTRAP)
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule
    
  
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
