import { UserState } from './state/user.state';
import { EnvState } from './state/envs.state';
import { EnvService } from './services/env.service';
import { NewApiProjectModal } from './designer/newApiProject/newApiProject.modal.component';
import { AuthInterceptor } from './utils/AuthInterceptor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AceEditorModule } from 'ng2-ace-editor';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogConfig, MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatListModule } from '@angular/material/list';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DesignerComponent } from './designer/designer.component';
import { DocsComponent } from './docs/docs.component';
import { ApiProjectState } from './state/apiProjects.state';
import { ApiProjectService } from './services/apiProject.service';
import { Toaster } from './services/toaster.service';
import { FormValidatorDirective } from './directives/form-validator.directive';
import { ApiProjectDetailComponent } from './api-project-detail/api-project-detail.component';
import { ProjectHomeComponent } from './api-project-detail/project-home/project-home.component';
import { ProjectFolderComponent } from './api-project-detail/project-folder/project-folder.component';
import { ProjectTraitsComponent } from './api-project-detail/project-traits/project-traits.component';
import { ProjectEndpointComponent } from './api-project-detail/project-endpoint/project-endpoint.component';
import { ProjectModelsComponent } from './api-project-detail/project-models/project-models.component';
import {
  ConfirmDirective,
  ConfirmDirectiveComponent,
  ConfirmService,
} from './directives/confirm.directive';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { AppBootstrap } from './utils/appBootstrap';
import { ApicTagEditorComponent } from './components/apic-tag-editor/apic-tag-editor.component';
import Utils from './services/utils.service';
import { ResponseBuilderItem } from './components/response-schema-builder/response-builder-item.component';
import { ResponseSchemaBuilderComponent } from './components/response-schema-builder/response-schema-builder.component';
import { EnvsComponent } from './envs/envs.component';
import { OnlyAlphaNumericInputDirective } from './directives/only-alpha-numeric-input.directive';
import { FileSystem } from './services/fileSystem.service';
import { ImportProjectComponent } from './designer/import-project/import-project.component';
import { SwaggerService } from './services/swagger.service';
import { ProjectExportModalComponent } from './api-project-detail/project-export-modal/project-export-modal.component';
import { LoginComponent } from './login/login.component';
import { HttpService } from './services/http.service';
import { StompService } from './services/stomp.service';
import { SyncService } from './services/sync.service';
import { OfflineComponent } from './components/offline/offline.component';
import { SettingsComponent } from './settings/settings.component';
import { ThemesComponent } from './settings/themes/themes.component';
import { WebClientComponent } from './settings/web-client/web-client.component';
import { SecurityDefComponent } from './api-project-detail/project-home/security-def/security-def.component';
import { environment } from 'src/environments/environment';
import { KeyValueEditorComponent } from './components/key-value-editor/key-value-editor.component';
import { ProjSettingsComponent } from './api-project-detail/project-home/proj-settings/proj-settings.component';
import { JsonSchemaComponent } from './components/json-schema-builder/jsonschema.component';
import { MainJsonSchemaComponent } from './components/json-schema-builder/main/main.component';
import { SelectSchemaJsonSchemaComponent } from './components/json-schema-builder/field/selectschema.component';
import { FieldJsonSchemaComponent } from './components/json-schema-builder/field/field.component';
import { JsonSchemaStateService } from './components/json-schema-builder/schemaState.service';
import { EndpBodyParamsComponent } from './api-project-detail/project-endpoint/endp-body-params/endp-body-params.component';
import { ApicAceComponent } from './components/apic-ace/apic-ace.component';
import { AceResizeDirective } from './directives/ace-resize.directive';
import { PrePostRunScriptComponent } from './components/pre-post-run-script/pre-post-run-script.component';
import { TesterMainComponent } from './tester-main/tester-main.component';
import { TesterNavComponent } from './tester-main/tester-nav/tester-nav.component';
import { NavRequestsComponent } from './tester-main/tester-nav/nav-requests/nav-requests.component';
import { RequestsState } from './state/requests.state';
import { TreeSelectorComponent } from './components/tree-selector/tree-selector.component';
import { TesterTabsComponent } from './tester-main/tester-tabs/tester-tabs.component';
import { TabRequestComponent } from './tester-main/tester-tabs/tab-request/tab-request.component';
import { TabSocketComponent } from './tester-main/tester-tabs/tab-socket/tab-socket.component';
import { ApicRichInputComponent } from './components/apic-rich-input/apic-rich-input.component';

@NgModule({
  declarations: [
    FormValidatorDirective,
    ConfirmDirective,
    ConfirmDirectiveComponent,
    AppComponent,
    HeaderComponent,
    DesignerComponent,
    DocsComponent,
    NewApiProjectModal,
    ApiProjectDetailComponent,
    ProjectHomeComponent,
    ProjectFolderComponent,
    ProjectModelsComponent,
    ProjectEndpointComponent,
    ApicTagEditorComponent,
    ProjectTraitsComponent,
    ResponseBuilderItem,
    ResponseSchemaBuilderComponent,
    EnvsComponent,
    OnlyAlphaNumericInputDirective,
    ImportProjectComponent,
    ProjectExportModalComponent,
    LoginComponent,
    OfflineComponent,
    SettingsComponent,
    ThemesComponent,
    WebClientComponent,
    SecurityDefComponent,
    KeyValueEditorComponent,
    ProjSettingsComponent,
    JsonSchemaComponent,
    MainJsonSchemaComponent,
    SelectSchemaJsonSchemaComponent,
    FieldJsonSchemaComponent,
    EndpBodyParamsComponent,
    ApicAceComponent,
    AceResizeDirective,
    PrePostRunScriptComponent,
    TesterMainComponent,
    TesterNavComponent,
    NavRequestsComponent,
    TreeSelectorComponent,
    TesterTabsComponent,
    TabRequestComponent,
    TabSocketComponent,
    ApicRichInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxsModule.forRoot([ApiProjectState, EnvState, UserState, RequestsState], {
      developmentMode: !environment.production,
      selectorOptions: {
        suppressErrors: false,
        injectContainerState: false
      }
    }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    BrowserAnimationsModule,
    AceEditorModule,
    MatButtonModule,
    MatIconModule,
    MatRippleModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatDialogModule,
    MatTabsModule,
    MatMenuModule,
    MatDividerModule,
    MatSelectModule,
    MatChipsModule,
    MatListModule,
    MatRadioModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    ScrollingModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { ...new MatDialogConfig(), position: { top: '50px' } } },
    AppBootstrap,
    ApiProjectService,
    JsonSchemaStateService,
    EnvService,
    Toaster,
    Utils,
    ConfirmService,
    FileSystem,
    SwaggerService,
    HttpService,
    StompService,
    SyncService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
