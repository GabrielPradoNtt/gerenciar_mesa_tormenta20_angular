import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { JogadorComponent } from './page/personagens/jogador/jogador.component';
import { ListaPersonagensComponent } from './page/personagens/listas/listas.component';
import { PesquisaComponent } from './page/artigos/pesquisa/pesquisa.component';
import { ArtigosModule } from './page/artigos/artigos.module';
import { ListaGruposComponent } from './page/grupos/lista/lista.component';
import { GruposComponent } from './page/grupos/grupos.component';
import { NpcComponent } from './page/personagens/npc/npc.component';
import { ListaAmeacasComponent } from './page/ameacas/lista/lista.component';
import { FichaAmeacasComponent } from './page/ameacas/ficha/ficha.component';
import { ListaHistoriasComponent } from './page/historias/lista/lista.component';
import { ConfigPrincipalComponent } from './page/config/principal/principal.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Tormenta 20',
    },
    {
        path: 'pesquisar',
        component: PesquisaComponent,
        title: 'Tormenta 20',
    },
    {
        path: 'artigo/:id',
        component: ArtigosModule,
        title: 'Tormenta 20',
    },
    {
        path: 'jogadores',
        component: ListaPersonagensComponent,
        title: 'Tormenta Jogadores',
    },
    {
        path: 'jogadores/:id',
        component: JogadorComponent,
        title: 'Tormenta Jogadores',
    },
    {
        path: 'grupos',
        component: ListaGruposComponent,
        title: 'Tormenta Grupos',
    },
    {
        path: 'grupos/:id',
        component: GruposComponent,
        title: 'Tormenta Grupos',
    },
    {
        path: 'npc',
        component: ListaPersonagensComponent,
        title: 'Tormenta NPC',
    },
    {
        path: 'npc/:id',
        component: NpcComponent,
        title: 'Tormenta NPC',
    },
    {
        path: 'ameacas',
        component: ListaAmeacasComponent,
        title: 'Tormenta Ameaças',
    },
    {
        path: 'ameacas/:id',
        component: FichaAmeacasComponent,
        title: 'Tormenta Ameaças',
    },
    {
        path: 'historias',
        component: ListaHistoriasComponent,
        title: 'Tormenta histórias',
    },
    {
        path: 'historias/:id',
        component: HomeComponent,
        title: 'Tormenta histórias',
    },
    {
        path: 'config',
        component: ConfigPrincipalComponent,
        title: 'Tormenta Configurações',
    },
];
