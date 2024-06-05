import { PythContract } from "generated";

// ConstructedEvent
PythContract.ConstructedEvent.loader(({ event, context }) => {});

PythContract.ConstructedEvent.handler(({ event, context }) => {
  console.log("ConstructedEvent", event);
});

// NewGuardianSetEvent
PythContract.NewGuardianSetEvent.loader(({ event, context }) => {});

PythContract.NewGuardianSetEvent.handler(({ event, context }) => {
  console.log("NewGuardianSetEvent", event);
});

// // UpdatedPriceFeedsEvent
// PythContract.UpdatedPriceFeedsEvent.loader(({ event, context }) => {});

// PythContract.UpdatedPriceFeedsEvent.handler(({ event, context }) => {
//   console.log("UpdatedPriceFeedsEvent", event);
// });

// ContractUpgradedEvent
// PythContract.ContractUpgradedEvent.loader(({ event, context }) => {});

// PythContract.ContractUpgradedEvent.handler(({ event, context }) => {
//   console.log("ContractUpgradedEvent", event);
// });

// GovernanceDataSourceSetEvent
PythContract.GovernanceDataSourceSetEvent.loader(({ event, context }) => {});

PythContract.GovernanceDataSourceSetEvent.handler(({ event, context }) => {
  console.log("GovernanceDataSourceSetEvent", event);
});

// DataSourcesSetEvent
PythContract.DataSourcesSetEvent.loader(({ event, context }) => {});

PythContract.DataSourcesSetEvent.handler(({ event, context }) => {
  console.log("DataSourcesSetEvent", event);
});

// FeeSetEvent
PythContract.FeeSetEvent.loader(({ event, context }) => {});

PythContract.FeeSetEvent.handler(({ event, context }) => {
  console.log("FeeSetEvent", event);
});

// ValidPeriodSetEvent
PythContract.ValidPeriodSetEvent.loader(({ event, context }) => {});

PythContract.ValidPeriodSetEvent.handler(({ event, context }) => {
  console.log("ValidPeriodSetEvent", event);
});
