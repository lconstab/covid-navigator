var json =
{"Covid Navigator":{"adjacencies":[
{"nodeTo":"audience",
"nodeFrom":"cnvg",
"data":{"$color":"#557EAA",
"$type":"line"}},
{"nodeTo":"setting",
"nodeFrom":"cnvg",
"data":{"$color":"#557EAA",
"$type":"line"}},
{"nodeTo":"process",
"nodeFrom":"cnvg",
"data":{"$color":"#557EAA",
"$type":"line"}},
{"nodeTo":"subject",
"nodeFrom":"cnvg",
"data":{"$color":"#557EAA",
"$type":"line"}},
{"nodeTo":"asset",
"nodeFrom":"cnvg",
"data":{"$color":"#557EAA",
"$type":"line"}},
],
"data":{"$color":"#800000",
"$type":"rectangle",
"description":""},
"id":"cnvg",
"name":"COVID NAVIGATOR"},

"Intended Audience":{"adjacencies":[
{"nodeTo":"patient",
"nodeFrom":"audience",
"data":{"$color":"#557EAA",
"$type":"line"}},
{"nodeTo":"direct",
"nodeFrom":"audience",
"data":{"$color":"#557EAA",
"$type":"line"}},
{"nodeTo":"admin",
"nodeFrom":"audience",
"data":{"$color":"#557EAA",
"$type":"line"}},
{"nodeTo":"research",
"nodeFrom":"audience",
"data":{"$color":"#557EAA",
"$type":"line"}},
{"nodeTo":"public",
"nodeFrom":"audience",
"data":{"$color":"#557EAA",
"$type":"line"}},
],
"data":{"$color":"#2121FF",
"$type":"square",
"description":""},
"id":"audience",
"name":"INTENDED AUDIENCE"},

"Care Setting":{"adjacencies":[
{"nodeTo":"home",
"nodeFrom":"setting",
"data":{"$color":"#557EAA",
"$type":"line"}},
{"nodeTo":"telemedicine",
"nodeFrom":"setting",
"data":{"$color":"#557EAA",
"$type":"line"}},
{"nodeTo":"ambulatory",
"nodeFrom":"setting",
"data":{"$color":"#557EAA",
"$type":"line"}},
{"nodeTo":"acute",
"nodeFrom":"setting",
"data":{"$color":"#557EAA",
"$type":"line"}},
],
"data":{"$color":"#F6358A",
"$type":"triangle",
"description":""},
"id":"setting",
"name":"CARE SETTING"},

"Care Process":{"adjacencies":[
{"nodeTo":"prevention",
"nodeFrom":"process",
"data":{"$color":"#557EAA",
"$type":"line"}},
{"nodeTo":"screening",
"nodeFrom":"process",
"data":{"$color":"#557EAA",
"$type":"line"}},
{"nodeTo":"diagnosis",
"nodeFrom":"process",
"data":{"$color":"#557EAA",
"$type":"line"}},
{"nodeTo":"treatment",
"nodeFrom":"process",
"data":{"$color":"#557EAA",
"$type":"line"}},
{"nodeTo":"followup",
"nodeFrom":"process",
"data":{"$color":"#557EAA",
"$type":"line"}},
],
"data":{"$color":"#FF4500",
"$type":"circle",
"description":""},
"id":"process",
"name":"CARE PROCESS"},

"Subject":{"adjacencies":[
{"nodeTo":"caremgmt",
"nodeFrom":"subject",
"data":{"$color":"#557EAA",
"$type":"line"}},
{"nodeTo":"features",
"nodeFrom":"subject",
"data":{"$color":"#557EAA",
"$type":"line"}},
{"nodeTo":"resmgmt",
"nodeFrom":"subject",
"data":{"$color":"#557EAA",
"$type":"line"}},
{"nodeTo":"ppe",
"nodeFrom":"subject",
"data":{"$color":"#557EAA",
"$type":"line"}},
{"nodeTo":"logistics",
"nodeFrom":"subject",
"data":{"$color":"#557EAA",
"$type":"line"}},
{"nodeTo":"lab",
"nodeFrom":"subject",
"data":{"$color":"#557EAA",
"$type":"line"}},
{"nodeTo":"comorb",
"nodeFrom":"subject",
"data":{"$color":"#557EAA",
"$type":"line"}},
{"nodeTo":"specpop",
"nodeFrom":"subject",
"data":{"$color":"#557EAA",
"$type":"line"}},
{"nodeTo":"control",
"nodeFrom":"subject",
"data":{"$color":"#557EAA",
"$type":"line"}},
{"nodeTo":"epid",
"nodeFrom":"subject",
"data":{"$color":"#557EAA",
"$type":"line"}},
{"nodeTo":"pubhealth",
"nodeFrom":"subject",
"data":{"$color":"#557EAA",
"$type":"line"}},
],
"data":{"$color":"#8B008B",
"$type":"star",
"description":""},
"id":"subject",
"name":"SUBJECT"},

"Asset Type":{"adjacencies":[
{"nodeTo":"datavis",
"nodeFrom":"asset",
"data":{"$color":"#557EAA",
"$type":"line"}},
{"nodeTo":"datacol",
"nodeFrom":"asset",
"data":{"$color":"#557EAA",
"$type":"line"}},
{"nodeTo":"knowledge",
"nodeFrom":"asset",
"data":{"$color":"#557EAA",
"$type":"line"}},
{"nodeTo":"list",
"nodeFrom":"asset",
"data":{"$color":"#557EAA",
"$type":"line"}},

],
"data":{"$color":"#636453",
"$type":"ellipse",
"description":""},
"id":"asset",
"name":"ASSET"},


"Patient":{"adjacencies":[],
"data":{"$color":"#2121FF",
"$type":"square",
"description":""},
"id":"patient",
"name":"Patient"},

"Direct Care":{"adjacencies":[],
"data":{"$color":"#2121FF",
"$type":"square",
"description":""},
"id":"direct",
"name":"Direct Care"},

"Administration":{"adjacencies":[],
"data":{"$color":"#2121FF",
"$type":"square",
"description":""},
"id":"admin",
"name":"Administration"},

"Research":{"adjacencies":[],
"data":{"$color":"#2121FF",
"$type":"square",
"description":""},
"id":"research",
"name":"Research"},

"Public Health":{"adjacencies":[],
"data":{"$color":"#2121FF",
"$type":"square",
"description":""},
"id":"public",
"name":"Public Health"},

"Home":{"adjacencies":[],
"data":{"$color":"#F6358A",
"$type":"triangle",
"description":""},
"id":"home",
"name":"Home"},

"Telemedicine":{"adjacencies":[],
"data":{"$color":"#F6358A",
"$type":"triangle",
"description":""},
"id":"telemedicine",
"name":"Telemedicine"},

"Ambulatory":{"adjacencies":[],
"data":{"$color":"#F6358A",
"$type":"triangle",
"description":""},
"id":"ambulatory",
"name":"Ambulatory"},

"Acute Care":{"adjacencies":[
{"nodeTo":"ed",
"nodeFrom":"acute",
"data":{"$color":"#557EAA",
"$type":"line"}},
{"nodeTo":"ward",
"nodeFrom":"acute",
"data":{"$color":"#557EAA",
"$type":"line"}},
{"nodeTo":"or",
"nodeFrom":"acute",
"data":{"$color":"#557EAA",
"$type":"line"}},
{"nodeTo":"icu",
"nodeFrom":"acute",
"data":{"$color":"#557EAA",
"$type":"line"}},
{"nodeTo":"speclabs",
"nodeFrom":"acute",
"data":{"$color":"#557EAA",
"$type":"line"}},
],
"data":{"$color":"#F6358A",
"$type":"triangle",
"description":""},
"id":"acute",
"name":"Acute Care"},

"ED":{"adjacencies":[],
"data":{"$color":"#F6358A",
"$type":"triangle",
"description":""},
"id":"ed",
"name":"ED"},

"Acute Care Ward":{"adjacencies":[],
"data":{"$color":"#F6358A",
"$type":"triangle",
"description":""},
"id":"ward",
"name":"Acute Care Ward"},

"OR":{"adjacencies":[],
"data":{"$color":"#F6358A",
"$type":"triangle",
"description":""},
"id":"or",
"name":"OR"},

"ICU":{"adjacencies":[],
"data":{"$color":"#F6358A",
"$type":"triangle",
"description":""},
"id":"icu",
"name":"ICU"},

"Special Labs":{"adjacencies":[],
"data":{"$color":"#F6358A",
"$type":"triangle",
"description":""},
"id":"speclabs",
"name":"Special Labs"},


"Prevention":{"adjacencies":[],
"data":{"$color":"#FF4500",
"$type":"circle",
"description":""},
"id":"prevention",
"name":"Prevention"},

"Screening":{"adjacencies":[],
"data":{"$color":"#FF4500",
"$type":"circle",
"description":""},
"id":"screening",
"name":"Screening"},

"Diagnosis":{"adjacencies":[],
"data":{"$color":"#FF4500",
"$type":"circle",
"description":""},
"id":"diagnosis",
"name":"Diagnosis"},

"Treatment":{"adjacencies":[
{"nodeTo":"procedures",
"nodeFrom":"treatment",
"data":{"$color":"#557EAA",
"$type":"line"}},
{"nodeTo":"meds",
"nodeFrom":"treatment",
"data":{"$color":"#557EAA",
"$type":"line"}},
],
"data":{"$color":"#FF4500",
"$type":"circle",
"description":""},
"id":"treatment",
"name":"Treatment"},

"Procedures":{"adjacencies":[],
"data":{"$color":"#FF4500",
"$type":"circle",
"description":""},
"id":"procedures",
"name":"Procedures"},

"Medications":{"adjacencies":[],
"data":{"$color":"#FF4500",
"$type":"circle",
"description":""},
"id":"meds",
"name":"Medications"},

"Followup":{"adjacencies":[],
"data":{"$color":"#FF4500",
"$type":"circle",
"description":""},
"id":"followup",
"name":"Followup"},

"Care Management":{"adjacencies":[],
"data":{"$color":"#8B008B",
"$type":"star",
"description":""},
"id":"caremgmt",
"name":"Care Management"},

"Clinical Features and Diagnosis":{"adjacencies":[],
"data":{"$color":"#8B008B",
"$type":"star",
"description":""},
"id":"features",
"name":"Clinical Features and Diagnosis"},

"Resource Management":{"adjacencies":[],
"data":{"$color":"#8B008B",
"$type":"star",
"description":""},
"id":"resmgmt",
"name":"Resource Management"},

"Personal Protection":{"adjacencies":[],
"data":{"$color":"#8B008B",
"$type":"star",
"description":""},
"id":"ppe",
"name":"Personal Protection"},

"Logistics":{"adjacencies":[],
"data":{"$color":"#8B008B",
"$type":"star",
"description":""},
"id":"logistics",
"name":"Logistics"},

"Laboratory":{"adjacencies":[],
"data":{"$color":"#8B008B",
"$type":"star",
"description":""},
"id":"lab",
"name":"Laboratory"},

"Co-morbidities":{"adjacencies":[],
"data":{"$color":"#8B008B",
"$type":"star",
"description":""},
"id":"comorb",
"name":"Co-morbidities"},

"Special Populations":{"adjacencies":[],
"data":{"$color":"#8B008B",
"$type":"star",
"description":""},
"id":"specpop",
"name":"Special Populations"},

"Infection Control":{"adjacencies":[],
"data":{"$color":"#8B008B",
"$type":"star",
"description":""},
"id":"control",
"name":"Infection Control"},


"Epidemiology":{"adjacencies":[],
"data":{"$color":"#8B008B",
"$type":"star",
"description":""},
"id":"epid",
"name":"Epidemilogy"},

"Public Health Subject":{"adjacencies":[
{"nodeTo":"caserep",
"nodeFrom":"pubhealth",
"data":{"$color":"#557EAA",
"$type":"line"}},
],
"data":{"$color":"#8B008B",
"$type":"star",
"description":""},
"id":"pubhealth",
"name":"Public Health"},

"Case Reporting":{"adjacencies":[],
"data":{"$color":"#8B008B",
"$type":"star",
"description":""},
"id":"caserep",
"name":"Case Reporting"},

"Data Visualization":{"adjacencies":[
{"nodeTo":"dashboards",
"nodeFrom":"datavis",
"data":{"$color":"#557EAA",
"$type":"line"}},
{"nodeTo":"maps",
"nodeFrom":"datavis",
"data":{"$color":"#557EAA",
"$type":"line"}},
],
"data":{"$color":"#636453",
"$type":"ellipse",
"description":""},
"id":"datavis",
"name":"Data Visualization"},

"Data Collection":{"adjacencies":[
{"nodeTo":"datasets",
"nodeFrom":"datacol",
"data":{"$color":"#557EAA",
"$type":"line"}},
{"nodeTo":"registries",
"nodeFrom":"datacol",
"data":{"$color":"#557EAA",
"$type":"line"}},

],
"data":{"$color":"#636453",
"$type":"ellipse",
"description":""},
"id":"datacol",
"name":"Data Collection"},

"Knowledge Artifact":{"adjacencies":[
{"nodeTo":"guidelines",
"nodeFrom":"knowledge",
"data":{"$color":"#557EAA",
"$type":"line"}},
{"nodeTo":"rules",
"nodeFrom":"knowledge",
"data":{"$color":"#557EAA",
"$type":"line"}},
{"nodeTo":"models",
"nodeFrom":"knowledge",
"data":{"$color":"#557EAA",
"$type":"line"}},
{"nodeTo":"policy",
"nodeFrom":"knowledge",
"data":{"$color":"#557EAA",
"$type":"line"}},
{"nodeTo":"workflows",
"nodeFrom":"knowledge",
"data":{"$color":"#557EAA",
"$type":"line"}},
{"nodeTo":"recommend",
"nodeFrom":"knowledge",
"data":{"$color":"#557EAA",
"$type":"line"}},
{"nodeTo":"trial",
"nodeFrom":"knowledge",
"data":{"$color":"#557EAA",
"$type":"line"}},
],
"data":{"$color":"#636453",
"$type":"ellipse",
"description":""},
"id":"knowledge",
"name":"Knowledge Artifact"},

"Directories/Lists":{"adjacencies":[
{"nodeTo":"healthsys",
"nodeFrom":"list",
"data":{"$color":"#557EAA",
"$type":"line"}},
{"nodeTo":"jurisdiction",
"nodeFrom":"list",
"data":{"$color":"#557EAA",
"$type":"line"}},
{"nodeTo":"sdo",
"nodeFrom":"list",
"data":{"$color":"#557EAA",
"$type":"line"}},
{"nodeTo":"prof",
"nodeFrom":"list",
"data":{"$color":"#557EAA",
"$type":"line"}},
{"nodeTo":"commercial",
"nodeFrom":"list",
"data":{"$color":"#557EAA",
"$type":"line"}},

],
"data":{"$color":"#636453",
"$type":"ellipse",
"description":""},
"id":"list",
"name":"Directories/Lists"},

"Health Systems":{"adjacencies":[],
"data":{"$color":"#636453",
"$type":"ellipse",
"description":""},
"id":"healthsys",
"name":"Health Systems"},

"Government / Jurisdiction":{"adjacencies":[],
"data":{"$color":"#636453",
"$type":"ellipse",
"description":""},
"id":"jurisdiction",
"name":"Government / Jurisdiction"},

"Standards Organizations":{"adjacencies":[],
"data":{"$color":"#636453",
"$type":"ellipse",
"description":""},
"id":"sdo",
"name":"Standards Organizations"},

"Professional Groups":{"adjacencies":[],
"data":{"$color":"#636453",
"$type":"ellipse",
"description":""},
"id":"prof",
"name":"Professional Groups"},

"Commercial Entities":{"adjacencies":[],
"data":{"$color":"#636453",
"$type":"ellipse",
"description":""},
"id":"commercial",
"name":"Commercial Entities"},


"Guidelines":{"adjacencies":[],
"data":{"$color":"#636453",
"$type":"ellipse",
"description":""},
"id":"guidelines",
"name":"Guidelines"},

"CDS Rules":{"adjacencies":[],
"data":{"$color":"#636453",
"$type":"ellipse",
"description":""},
"id":"rules",
"name":"CDS Rules"},

"Models":{"adjacencies":[
{"nodeTo":"calc",
"nodeFrom":"models",
"data":{"$color":"#557EAA",
"$type":"line"}},
{"nodeTo":"check",
"nodeFrom":"models",
"data":{"$color":"#557EAA",
"$type":"line"}},
],
"data":{"$color":"#636453",
"$type":"ellipse",
"description":""},
"id":"models",
"name":"Models"},

"Policies and Procedures":{"adjacencies":[],
"data":{"$color":"#636453",
"$type":"ellipse",
"description":""},
"id":"policy",
"name":"Policies and Procedures"},

"Workflows":{"adjacencies":[],
"data":{"$color":"#636453",
"$type":"ellipse",
"description":""},
"id":"workflows",
"name":"Workflows"},

"Recommendation Knowledge":{"adjacencies":[],
"data":{"$color":"#636453",
"$type":"ellipse",
"description":""},
"id":"recommend",
"name":"Recommendation Knowledge"},

"Clinical Trial":{"adjacencies":[],
"data":{"$color":"#636453",
"$type":"ellipse",
"description":""},
"id":"trial",
"name":"Clinical Trial"},

"Calculators":{"adjacencies":[],
"data":{"$color":"#636453",
"$type":"ellipse",
"description":""},
"id":"calc",
"name":"Calculators"},

"Checklist":{"adjacencies":[],
"data":{"$color":"#636453",
"$type":"ellipse",
"description":""},
"id":"check",
"name":"Checklist"},

"Datasets":{"adjacencies":[],
"data":{"$color":"#636453",
"$type":"ellipse",
"description":""},
"id":"datasets",
"name":"Datasets"},

"Registries":{"adjacencies":[
{"nodeTo":"outcomes",
"nodeFrom":"registries",
"data":{"$color":"#557EAA",
"$type":"line"}},
],
"data":{"$color":"#636453",
"$type":"ellipse",
"description":""},
"id":"registries",
"name":"Registries"},

"Outcomes":{"adjacencies":[],
"data":{"$color":"#636453",
"$type":"ellipse",
"description":""},
"id":"outcomes",
"name":"Outcomes"},

"Dashboards":{"adjacencies":[],
"data":{"$color":"#636453",
"$type":"ellipse",
"description":""},
"id":"dashboards",
"name":"Dashboards"},

"Maps":{"adjacencies":[],
"data":{"$color":"#636453",
"$type":"ellipse",
"description":""},
"id":"maps",
"name":"Maps"},

"Penn Med Mask Respirator Guidance":{"adjacencies":[
{"nodeTo":"patient",
"nodeFrom":"pmmask",
"data":{"$color":"#557EAA",
"$type":"line"}},
{"nodeTo":"direct",
"nodeFrom":"pmmask",
"data":{"$color":"#557EAA",
"$type":"line"}},
{"nodeTo":"ambulatory",
"nodeFrom":"pmmask",
"data":{"$color":"#557EAA",
"$type":"line"}},
{"nodeTo":"acute",
"nodeFrom":"pmmask",
"data":{"$color":"#557EAA",
"$type":"line"}},
{"nodeTo":"prevention",
"nodeFrom":"pmmask",
"data":{"$color":"#557EAA",
"$type":"line"}},
{"nodeTo":"control",
"nodeFrom":"pmmask",
"data":{"$color":"#557EAA",
"$type":"line"}},
{"nodeTo":"ppe",
"nodeFrom":"pmmask",
"data":{"$color":"#557EAA",
"$type":"line"}},
{"nodeTo":"guidelines",
"nodeFrom":"pmmask",
"data":{"$color":"#557EAA",
"$type":"line"}},
{"nodeTo":"models",
"nodeFrom":"pmmask",
"data":{"$color":"#557EAA",
"$type":"line"}},
],
"data":{"$color":"#F6358A",
"$type":"circle",
"description":"Penn Med Evidence Summary for Masks and Respirators", 
"URL":"https://covid-acts.ahrq.gov/display/COV/COVID-19%3A+Masks+and+Respirators+for+Health+Care+Providers"},
"id":"pmmask",
"name":"Penn Med Mask Respirator Guidance"},

"McMaster EBM Covid":{"adjacencies":[
{"nodeTo":"direct",
"nodeFrom":"mcmaster",
"data":{"$color":"#557EAA",
"$type":"line"}},
{"nodeTo":"admin",
"nodeFrom":"mcmaster",
"data":{"$color":"#557EAA",
"$type":"line"}},
{"nodeTo":"research",
"nodeFrom":"mcmaster",
"data":{"$color":"#557EAA",
"$type":"line"}},
{"nodeTo":"public",
"nodeFrom":"mcmaster",
"data":{"$color":"#557EAA",
"$type":"line"}},
{"nodeTo":"list",
"nodeFrom":"mcmaster",
"data":{"$color":"#557EAA",
"$type":"line"}},
{"nodeTo":"healthsys",
"nodeFrom":"mcmaster",
"data":{"$color":"#557EAA",
"$type":"line"}},
{"nodeTo":"jurisdiction",
"nodeFrom":"mcmaster",
"data":{"$color":"#557EAA",
"$type":"line"}},
],
"data":{"$color":"#F6358A",
"$type":"circle",
"description":"McMaster University Evidence Forum - Covid-19", 
"URL":"https://www.mcmasterforum.org/find-evidence/covid-19-evidence"},
"id":"mcmaster",
"name":"McMaster EBM Covid"},

"Mayo QTC":{"adjacencies":[
{"nodeTo":"direct",
"nodeFrom":"mayoqtc",
"data":{"$color":"#557EAA",
"$type":"line"}},
{"nodeTo":"ambulatory",
"nodeFrom":"mayoqtc",
"data":{"$color":"#557EAA",
"$type":"line"}},
{"nodeTo":"acute",
"nodeFrom":"mayoqtc",
"data":{"$color":"#557EAA",
"$type":"line"}},
{"nodeTo":"treatment",
"nodeFrom":"mayoqtc",
"data":{"$color":"#557EAA",
"$type":"line"}},
{"nodeTo":"caremgmt",
"nodeFrom":"mayoqtc",
"data":{"$color":"#557EAA",
"$type":"line"}},
{"nodeTo":"comorb",
"nodeFrom":"mayoqtc",
"data":{"$color":"#557EAA",
"$type":"line"}},
{"nodeTo":"specpop",
"nodeFrom":"mayoqtc",
"data":{"$color":"#557EAA",
"$type":"line"}},
{"nodeTo":"guidelines",
"nodeFrom":"mayoqtc",
"data":{"$color":"#557EAA",
"$type":"line"}},
{"nodeTo":"calc",
"nodeFrom":"mayoqtc",
"data":{"$color":"#557EAA",
"$type":"line"}},
{"nodeTo":"check",
"nodeFrom":"mayoqtc",
"data":{"$color":"#557EAA",
"$type":"line"}},
],
"data":{"$color":"#F6358A",
"$type":"circle",
"description":"Online QTC Calculator", 
"URL":"https://www.mayoclinic.org/coronavirus-covid-19"}, 
"id":"mayoqtc",
"name":"Mayo QTC"},


"Daily Tracking":{"adjacencies":[
{"nodeTo":"patient",
"nodeFrom":"daytrack",
"data":{"$color":"#557EAA",
"$type":"line"}},
{"nodeTo":"direct",
"nodeFrom":"daytrack",
"data":{"$color":"#557EAA",
"$type":"line"}},
{"nodeTo":"admin",
"nodeFrom":"daytrack",
"data":{"$color":"#557EAA",
"$type":"line"}},
{"nodeTo":"diagnosis",
"nodeFrom":"daytrack",
"data":{"$color":"#557EAA",
"$type":"line"}},
{"nodeTo":"followup",
"nodeFrom":"daytrack",
"data":{"$color":"#557EAA",
"$type":"line"}},
{"nodeTo":"datavis",
"nodeFrom":"daytrack",
"data":{"$color":"#557EAA",
"$type":"line"}},
{"nodeTo":"datacol",
"nodeFrom":"daytrack",
"data":{"$color":"#557EAA",
"$type":"line"}},
],
"data":{"$color":"#F6358A",
"$type":"circle",
"description":"Daily tracking: incidence, new deaths worldwide, recoveries - as reported", 
"URL":"http://worldometers.info/coronavirus"}, 
"id":"daytrack",
"name":"Daily Tracking"},


"Ethics Resources":{"adjacencies":[
{"nodeTo":"guidelines",
"nodeFrom":"ethics",
"data":{"$color":"#557EAA",
"$type":"line"}},
{"nodeTo":"recommend",
"nodeFrom":"ethics",
"data":{"$color":"#557EAA",
"$type":"line"}},
{"nodeTo":"policy",
"nodeFrom":"ethics",
"data":{"$color":"#557EAA",
"$type":"line"}},
{"nodeTo":"trial",
"nodeFrom":"ethics",
"data":{"$color":"#557EAA",
"$type":"line"}},
],
"data":{"$color":"#F6358A",
"$type":"circle",
"description":"Ethics Resources on the Coronavirus from the Hastings Center", 
"URL":"https://www.thehastingscenter.org/ethics-resources-on-the-coronavirus/"}, 
"id":"ethics",
"name":"Ethics Resources"},


"NHS Portal":{"adjacencies":[
{"nodeTo":"patient",
"nodeFrom":"nhsportal",
"data":{"$color":"#557EAA",
"$type":"line"}},
{"nodeTo":"direct",
"nodeFrom":"nhsportal",
"data":{"$color":"#557EAA",
"$type":"line"}},
{"nodeTo":"public",
"nodeFrom":"nhsportal",
"data":{"$color":"#557EAA",
"$type":"line"}},
{"nodeTo":"prevention",
"nodeFrom":"nhsportal",
"data":{"$color":"#557EAA",
"$type":"line"}},
{"nodeTo":"followup",
"nodeFrom":"nhsportal",
"data":{"$color":"#557EAA",
"$type":"line"}},
{"nodeTo":"diagnosis",
"nodeFrom":"nhsportal",
"data":{"$color":"#557EAA",
"$type":"line"}},
{"nodeTo":"features",
"nodeFrom":"nhsportal",
"data":{"$color":"#557EAA",
"$type":"line"}},
{"nodeTo":"ppe",
"nodeFrom":"nhsportal",
"data":{"$color":"#557EAA",
"$type":"line"}},
{"nodeTo":"specpop",
"nodeFrom":"nhsportal",
"data":{"$color":"#557EAA",
"$type":"line"}},
],
"data":{"$color":"#F6358A",
"$type":"circle",
"description":"NHS Coronavirus Portal", 
"URL":"https://www.nhs.uk/conditions/coronavirus-covid-19/"}, 
"id":"nhsportal",
"name":"NHS Portal"},


};