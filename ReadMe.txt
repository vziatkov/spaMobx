General:
    Commands and Selectors - are buisness logic, must be covered units tests. It is clear functions no dependencies on other files.
    Services and Connected - importing and execute commands, pass services to commands, importing and use selectors.
    Models - simple classes with data, no dependencies between models and to other files. Use mobx (observable, computed actions)

Models, services - should be passed via Interfaces.

1) COMMANDS - clean functions. All needs data is coming in fucntion signature. No dependencies on other files.
Commands are buisness logic application. Should has good coverage of unit tests.
2) SELECTORS - clean functions like selectors in redux. Select and agrigate from different models. 
Should has good coverage of unit tests.
3) MODELS - simple class. It has inside observable values, actions which are changing data in this model, computed getters.
One important rule, models doesnt have dependencies to other files and other models. Default values are coming in constructor;
4) COMPONENTS - visual components. Has two underlayers inside file: connected and view;
    CONNECTED - function decorate in observer. Invoking store. Can execute commands (for example on click handler), can execute selectors.
    VIEW - react visual components, babylon etc. This layer should be isolated as much as possible and nothing know about application entitys
5) SERVICES - usually it is dependencies on external libs, packages. For example: logger, localstorage, socket, http, evo-ui-components,
evo-js-core, etc... Services can execute commands, selectors, update models.

Still not good - 
1) Connected direclty importing store!!! Store should be passed in arguments fucntion. No global direct import in multiple connected layers.
2) Async commands (maybe every command must return Promise as result). It need for creating chain commands.
3) Improve selectors. Library reselect doesnt work with mobx observable models. As result selector(store)();
4) Destructor process.


Why?
Buisness logic must be isolated, has perfect test coverage, and easiest added new tests (without mock all store).
In  app. must be concrete layers with responsibility for unifiying building games by different teams.
It should be easier add new variation of blackjack and easier update ui without changes in buisness logic.