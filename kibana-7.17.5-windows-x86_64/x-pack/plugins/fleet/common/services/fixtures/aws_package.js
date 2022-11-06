"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VALID_AWS_POLICY = exports.INVALID_AWS_POLICY = exports.AWS_PACKAGE = void 0;
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

const AWS_PACKAGE = {
  name: 'aws',
  title: 'AWS',
  version: '0.5.3',
  release: 'beta',
  description: 'AWS Integration',
  type: 'integration',
  download: '/epr/aws/aws-0.5.3.zip',
  path: '/package/aws/0.5.3',
  icons: [{
    src: '/img/logo_aws.svg',
    path: '/package/aws/0.5.3/img/logo_aws.svg',
    title: 'logo aws',
    size: '32x32',
    type: 'image/svg+xml'
  }],
  format_version: '1.0.0',
  readme: '/package/aws/0.5.3/docs/README.md',
  license: 'basic',
  categories: ['aws', 'cloud', 'network', 'security'],
  conditions: {
    'kibana.version': '^7.12.0'
  },
  screenshots: [{
    src: '/img/metricbeat-aws-overview.png',
    path: '/package/aws/0.5.3/img/metricbeat-aws-overview.png',
    title: 'metricbeat aws overview',
    size: '3848x2440',
    type: 'image/png'
  }],
  assets: {
    kibana: {
      dashboard: [],
      map: [],
      search: [],
      visualization: []
    },
    elasticsearch: {
      ingest_pipeline: []
    }
  },
  policy_templates: [{
    name: 'billing',
    title: 'AWS Billing',
    description: 'Collect AWS billing metrics',
    data_streams: ['billing'],
    inputs: [{
      type: 'aws/metrics',
      title: 'Collect billing metrics',
      description: 'Collect billing metrics',
      input_group: 'metrics'
    }],
    multiple: true,
    icons: [{
      src: '/img/logo_billing.svg',
      path: '/package/aws/0.5.3/img/logo_billing.svg',
      title: 'AWS Billing logo',
      size: '32x32',
      type: 'image/svg+xml'
    }],
    screenshots: [{
      src: '/img/metricbeat-aws-billing-overview.png',
      path: '/package/aws/0.5.3/img/metricbeat-aws-billing-overview.png',
      title: 'metricbeat aws billing overview',
      size: '2640x2240',
      type: 'image/png'
    }],
    readme: '/package/aws/0.5.3/docs/billing.md'
  }, {
    name: 'cloudtrail',
    title: 'AWS Cloudtrail',
    description: 'Collect logs from AWS Cloudtrail',
    data_streams: ['cloudtrail'],
    inputs: [{
      type: 's3',
      title: 'Collect logs from Cloudtrail service',
      description: 'Collecting Cloudtrail logs using S3 input',
      input_group: 'logs'
    }, {
      type: 'httpjson',
      title: 'Collect logs from third-party REST API (experimental)',
      description: 'Collect logs from third-party REST API (experimental)',
      input_group: 'logs'
    }],
    multiple: true,
    icons: [{
      src: '/img/logo_cloudtrail.svg',
      path: '/package/aws/0.5.3/img/logo_cloudtrail.svg',
      title: 'AWS Cloudtrail logo',
      size: '32x32',
      type: 'image/svg+xml'
    }],
    screenshots: [{
      src: '/img/filebeat-aws-cloudtrail.png',
      path: '/package/aws/0.5.3/img/filebeat-aws-cloudtrail.png',
      title: 'filebeat aws cloudtrail',
      size: '1702x1063',
      type: 'image/png'
    }],
    readme: '/package/aws/0.5.3/docs/cloudtrail.md'
  }, {
    name: 'cloudwatch',
    title: 'AWS CloudWatch',
    description: 'Collect logs and metrics from CloudWatch',
    data_streams: ['cloudwatch_logs', 'cloudwatch_metrics'],
    inputs: [{
      type: 's3',
      title: 'Collect logs from CloudWatch',
      description: 'Collecting logs from CloudWatch using S3 input',
      input_group: 'logs'
    }, {
      type: 'aws/metrics',
      title: 'Collect metrics from CloudWatch',
      description: 'Collecting metrics from AWS CloudWatch',
      input_group: 'metrics'
    }],
    multiple: true,
    icons: [{
      src: '/img/logo_cloudwatch.svg',
      path: '/package/aws/0.5.3/img/logo_cloudwatch.svg',
      title: 'AWS CloudWatch logo',
      size: '32x32',
      type: 'image/svg+xml'
    }],
    readme: '/package/aws/0.5.3/docs/cloudwatch.md'
  }, {
    name: 'dynamodb',
    title: 'AWS DynamoDB',
    description: 'Collect AWS DynamoDB metrics',
    data_streams: ['dynamodb'],
    inputs: [{
      type: 'aws/metrics',
      title: 'Collect dynamodb metrics',
      description: 'Collect dynamodb metrics',
      input_group: 'metrics'
    }],
    multiple: true,
    icons: [{
      src: '/img/logo_dynamodb.svg',
      path: '/package/aws/0.5.3/img/logo_dynamodb.svg',
      title: 'AWS DynamoDB logo',
      size: '32x32',
      type: 'image/svg+xml'
    }],
    categories: ['datastore'],
    screenshots: [{
      src: '/img/metricbeat-aws-dynamodb-overview.png',
      path: '/package/aws/0.5.3/img/metricbeat-aws-dynamodb-overview.png',
      title: 'metricbeat aws dynamodb overview',
      size: '2640x2240',
      type: 'image/png'
    }],
    readme: '/package/aws/0.5.3/docs/dynamodb.md'
  }, {
    name: 'ebs',
    title: 'AWS EBS',
    description: 'Collect AWS EBS metrics',
    data_streams: ['ebs'],
    inputs: [{
      type: 'aws/metrics',
      title: 'Collect EBS metrics',
      description: 'Collect EBS metrics',
      input_group: 'metrics'
    }],
    multiple: true,
    icons: [{
      src: '/img/logo_ebs.svg',
      path: '/package/aws/0.5.3/img/logo_ebs.svg',
      title: 'AWS EBS logo',
      size: '32x32',
      type: 'image/svg+xml'
    }],
    categories: ['datastore'],
    screenshots: [{
      src: '/img/metricbeat-aws-ebs-overview.png',
      path: '/package/aws/0.5.3/img/metricbeat-aws-ebs-overview.png',
      title: 'metricbeat aws ebs overview',
      size: '2640x2240',
      type: 'image/png'
    }],
    readme: '/package/aws/0.5.3/docs/ebs.md'
  }, {
    name: 'ec2',
    title: 'AWS EC2',
    description: 'Collect logs and metrics from EC2 service',
    data_streams: ['ec2_logs', 'ec2_metrics'],
    inputs: [{
      type: 's3',
      title: 'Collect logs from EC2 service',
      description: 'Collecting EC2 logs using S3 input',
      input_group: 'logs'
    }, {
      type: 'aws/metrics',
      title: 'Collect metrics from EC2 service',
      description: 'Collecting EC2 metrics using AWS CloudWatch',
      input_group: 'metrics'
    }],
    multiple: true,
    icons: [{
      src: '/img/logo_ec2.svg',
      path: '/package/aws/0.5.3/img/logo_ec2.svg',
      title: 'AWS EC2 logo',
      size: '32x32',
      type: 'image/svg+xml'
    }],
    screenshots: [{
      src: '/img/metricbeat-aws-ec2-overview.png',
      path: '/package/aws/0.5.3/img/metricbeat-aws-ec2-overview.png',
      title: 'metricbeat aws ec2 overview',
      size: '2640x2240',
      type: 'image/png'
    }],
    readme: '/package/aws/0.5.3/docs/ec2.md'
  }, {
    name: 'elb',
    title: 'AWS ELB',
    description: 'Collect logs and metrics from ELB service',
    data_streams: ['elb_logs', 'elb_metrics'],
    inputs: [{
      type: 's3',
      title: 'Collect logs from ELB service',
      description: 'Collecting ELB logs using S3 input',
      input_group: 'logs'
    }, {
      type: 'aws/metrics',
      title: 'Collect metrics from ELB service',
      description: 'Collecting ELB metrics using AWS CloudWatch',
      input_group: 'metrics'
    }],
    multiple: true,
    icons: [{
      src: '/img/logo_elb.svg',
      path: '/package/aws/0.5.3/img/logo_elb.svg',
      title: 'AWS ELB logo',
      size: '32x32',
      type: 'image/svg+xml'
    }],
    screenshots: [{
      src: '/img/metricbeat-aws-elb-overview.png',
      path: '/package/aws/0.5.3/img/metricbeat-aws-elb-overview.png',
      title: 'metricbeat aws elb overview',
      size: '2640x2240',
      type: 'image/png'
    }, {
      src: '/img/filebeat-aws-elb-overview.png',
      path: '/package/aws/0.5.3/img/filebeat-aws-elb-overview.png',
      title: 'filebeat aws elb overview',
      size: '1684x897',
      type: 'image/png'
    }],
    readme: '/package/aws/0.5.3/docs/elb.md'
  }, {
    name: 'lambda',
    title: 'AWS Lambda',
    description: 'Collect AWS Lambda metrics',
    data_streams: ['lambda'],
    inputs: [{
      type: 'aws/metrics',
      title: 'Collect Lambda metrics',
      description: 'Collect Lambda metrics',
      input_group: 'metrics'
    }],
    multiple: true,
    icons: [{
      src: '/img/logo_lambda.svg',
      path: '/package/aws/0.5.3/img/logo_lambda.svg',
      title: 'AWS Lambda logo',
      size: '32x32',
      type: 'image/svg+xml'
    }],
    screenshots: [{
      src: '/img/metricbeat-aws-lambda-overview.png',
      path: '/package/aws/0.5.3/img/metricbeat-aws-lambda-overview.png',
      title: 'metricbeat aws lambda overview',
      size: '2640x2240',
      type: 'image/png'
    }],
    readme: '/package/aws/0.5.3/docs/lambda.md'
  }, {
    name: 'natgateway',
    title: 'AWS NATGateway',
    description: 'Collect AWS NATGateway metrics',
    data_streams: ['natgateway'],
    inputs: [{
      type: 'aws/metrics',
      title: 'Collect NATGateway metrics',
      description: 'Collect NATGateway metrics',
      input_group: 'metrics'
    }],
    multiple: true,
    icons: [{
      src: '/img/logo_natgateway.svg',
      path: '/package/aws/0.5.3/img/logo_natgateway.svg',
      title: 'AWS NATGateway logo',
      size: '32x32',
      type: 'image/svg+xml'
    }],
    readme: '/package/aws/0.5.3/docs/natgateway.md'
  }, {
    name: 'rds',
    title: 'AWS RDS',
    description: 'Collect AWS RDS metrics',
    data_streams: ['rds'],
    inputs: [{
      type: 'aws/metrics',
      title: 'Collect RDS metrics',
      description: 'Collect RDS metrics',
      input_group: 'metrics'
    }],
    multiple: true,
    icons: [{
      src: '/img/logo_rds.svg',
      path: '/package/aws/0.5.3/img/logo_rds.svg',
      title: 'AWS RDS logo',
      size: '32x32',
      type: 'image/svg+xml'
    }],
    categories: ['datastore'],
    screenshots: [{
      src: '/img/metricbeat-aws-rds-overview.png',
      path: '/package/aws/0.5.3/img/metricbeat-aws-rds-overview.png',
      title: 'metricbeat aws rds overview',
      size: '2640x2240',
      type: 'image/png'
    }],
    readme: '/package/aws/0.5.3/docs/rds.md'
  }, {
    name: 's3',
    title: 'AWS S3',
    description: 'Collect AWS S3 metrics',
    data_streams: ['s3_daily_storage', 's3_request', 's3access'],
    inputs: [{
      type: 's3',
      title: 'Collect S3 access logs',
      description: 'Collecting S3 access logs using S3 input',
      input_group: 'logs'
    }, {
      type: 'aws/metrics',
      title: 'Collect metrics from S3',
      description: 'Collecting S3 metrics using AWS CloudWatch',
      input_group: 'metrics'
    }],
    multiple: true,
    icons: [{
      src: '/img/logo_s3.svg',
      path: '/package/aws/0.5.3/img/logo_s3.svg',
      title: 'AWS S3 logo',
      size: '32x32',
      type: 'image/svg+xml'
    }],
    categories: ['datastore'],
    screenshots: [{
      src: '/img/metricbeat-aws-s3-overview.png',
      path: '/package/aws/0.5.3/img/metricbeat-aws-s3-overview.png',
      title: 'metricbeat aws s3 overview',
      size: '2640x2240',
      type: 'image/png'
    }, {
      src: '/img/filebeat-aws-s3access-overview.png',
      path: '/package/aws/0.5.3/img/filebeat-aws-s3access-overview.png',
      title: 'filebeat aws s3access overview',
      size: '1684x897',
      type: 'image/png'
    }],
    readme: '/package/aws/0.5.3/docs/s3.md'
  }, {
    name: 'sns',
    title: 'AWS SNS',
    description: 'Collect AWS SNS metrics',
    data_streams: ['sns'],
    inputs: [{
      type: 'aws/metrics',
      title: 'Collect SNS metrics',
      description: 'Collect SNS metrics',
      input_group: 'metrics'
    }],
    multiple: true,
    icons: [{
      src: '/img/logo_sns.svg',
      path: '/package/aws/0.5.3/img/logo_sns.svg',
      title: 'AWS SNS logo',
      size: '32x32',
      type: 'image/svg+xml'
    }],
    screenshots: [{
      src: '/img/metricbeat-aws-sns-overview.png',
      path: '/package/aws/0.5.3/img/metricbeat-aws-sns-overview.png',
      title: 'metricbeat aws sns overview',
      size: '2640x2240',
      type: 'image/png'
    }],
    readme: '/package/aws/0.5.3/docs/sns.md'
  }, {
    name: 'sqs',
    title: 'AWS SQS',
    description: 'Collect AWS SQS metrics',
    data_streams: ['sqs'],
    inputs: [{
      type: 'aws/metrics',
      title: 'Collect SQS metrics',
      description: 'Collect SQS metrics',
      input_group: 'metrics'
    }],
    multiple: true,
    icons: [{
      src: '/img/logo_sqs.svg',
      path: '/package/aws/0.5.3/img/logo_sqs.svg',
      title: 'AWS SQS logo',
      size: '32x32',
      type: 'image/svg+xml'
    }],
    screenshots: [{
      src: '/img/metricbeat-aws-sqs-overview.png',
      path: '/package/aws/0.5.3/img/metricbeat-aws-sqs-overview.png',
      title: 'metricbeat aws sqs overview',
      size: '2640x2240',
      type: 'image/png'
    }],
    readme: '/package/aws/0.5.3/docs/sqs.md'
  }, {
    name: 'transitgateway',
    title: 'AWS Transit Gateway',
    description: 'Collect AWS Transit Gateway metrics',
    data_streams: ['transitgateway'],
    inputs: [{
      type: 'aws/metrics',
      title: 'Collect Transit Gateway metrics',
      description: 'Collect Transit Gateway metrics',
      input_group: 'metrics'
    }],
    multiple: true,
    icons: [{
      src: '/img/logo_transitgateway.svg',
      path: '/package/aws/0.5.3/img/logo_transitgateway.svg',
      title: 'AWS Transit Gateway logo',
      size: '32x32',
      type: 'image/svg+xml'
    }],
    readme: '/package/aws/0.5.3/docs/transitgateway.md'
  }, {
    name: 'usage',
    title: 'AWS Usage',
    description: 'Collect AWS Usage metrics',
    data_streams: ['usage'],
    inputs: [{
      type: 'aws/metrics',
      title: 'Collect Usage metrics',
      description: 'Collect Usage metrics',
      input_group: 'metrics'
    }],
    multiple: true,
    screenshots: [{
      src: '/img/metricbeat-aws-usage-overview.png',
      path: '/package/aws/0.5.3/img/metricbeat-aws-usage-overview.png',
      title: 'metricbeat aws sns overview',
      size: '2640x2240',
      type: 'image/png'
    }],
    readme: '/package/aws/0.5.3/docs/usage.md'
  }, {
    name: 'vpcflow',
    title: 'AWS VPC Flow',
    description: 'Collect AWS vpcflow logs',
    data_streams: ['vpcflow'],
    inputs: [{
      type: 's3',
      title: 'Collect VPC Flow logs',
      description: 'Collecting VPC Flow logs using S3 input',
      input_group: 'logs'
    }],
    multiple: true,
    icons: [{
      src: '/img/logo_vpcflow.svg',
      path: '/package/aws/0.5.3/img/logo_vpcflow.svg',
      title: 'AWS VPC logo',
      size: '32x32',
      type: 'image/svg+xml'
    }],
    readme: '/package/aws/0.5.3/docs/vpcflow.md'
  }, {
    name: 'vpn',
    title: 'AWS VPN',
    description: 'Collect AWS VPN metrics',
    data_streams: ['vpn'],
    inputs: [{
      type: 'aws/metrics',
      title: 'Collect VPN metrics',
      description: 'Collect VPN metrics',
      input_group: 'metrics'
    }],
    multiple: true,
    icons: [{
      src: '/img/logo_vpn.svg',
      path: '/package/aws/0.5.3/img/logo_vpn.svg',
      title: 'AWS VPN logo',
      size: '32x32',
      type: 'image/svg+xml'
    }],
    categories: ['network'],
    readme: '/package/aws/0.5.3/docs/vpn.md'
  }],
  data_streams: [{
    type: 'metrics',
    dataset: 'aws.billing',
    title: 'AWS billing metrics',
    release: 'beta',
    streams: [{
      input: 'aws/metrics',
      vars: [{
        name: 'period',
        type: 'text',
        title: 'Period',
        multi: false,
        required: true,
        show_user: true,
        default: '12h'
      }, {
        name: 'latency',
        type: 'text',
        title: 'Latency',
        multi: false,
        required: false,
        show_user: false
      }, {
        name: 'cost_explorer_config.group_by_dimension_keys',
        type: 'text',
        title: 'Cost Explorer Group By Dimension Keys',
        multi: true,
        required: false,
        show_user: true,
        default: ['AZ', 'INSTANCE_TYPE', 'SERVICE']
      }, {
        name: 'cost_explorer_config.group_by_tag_keys',
        type: 'text',
        title: 'Cost Explorer Group By Tag Keys',
        multi: true,
        required: false,
        show_user: true,
        default: ['aws:createdBy']
      }],
      template_path: 'stream.yml.hbs',
      title: 'AWS Billing metrics',
      description: 'Collect AWS billing metrics',
      enabled: true
    }],
    package: 'aws',
    path: 'billing'
  }, {
    type: 'logs',
    dataset: 'aws.cloudtrail',
    title: 'AWS CloudTrail logs',
    release: 'beta',
    ingest_pipeline: 'default',
    streams: [{
      input: 's3',
      vars: [{
        name: 'visibility_timeout',
        type: 'text',
        title: 'Visibility Timeout',
        description: 'The duration that the received messages are hidden from subsequent retrieve requests after being retrieved by a ReceiveMessage request.  The maximum is 12 hours.',
        multi: false,
        required: false,
        show_user: false
      }, {
        name: 'api_timeout',
        type: 'text',
        title: 'API Timeout',
        description: 'The maximum duration of AWS API can take. The maximum is half of the visibility timeout value.',
        multi: false,
        required: false,
        show_user: false
      }, {
        name: 'queue_url',
        type: 'text',
        title: 'Queue URL',
        description: 'URL of the AWS SQS queue that messages will be received from.',
        multi: false,
        required: true,
        show_user: true
      }, {
        name: 'fips_enabled',
        type: 'bool',
        title: 'Enable S3 FIPS',
        description: 'Enabling this option changes the service name from `s3` to `s3-fips` for connecting to the correct service endpoint.',
        multi: false,
        required: false,
        show_user: false,
        default: false
      }],
      template_path: 's3.yml.hbs',
      title: 'AWS CloudTrail logs',
      description: 'Collect AWS CloudTrail logs using s3 input',
      enabled: true
    }, {
      input: 'httpjson',
      vars: [{
        name: 'url',
        type: 'text',
        title: 'URL of Splunk Enterprise Server',
        description: 'i.e. scheme://host:port, path is automatic',
        multi: false,
        required: true,
        show_user: true,
        default: 'https://server.example.com:8089'
      }, {
        name: 'username',
        type: 'text',
        title: 'Splunk REST API Username',
        multi: false,
        required: true,
        show_user: true
      }, {
        name: 'password',
        type: 'password',
        title: 'Splunk REST API Password',
        multi: false,
        required: true,
        show_user: true
      }, {
        name: 'ssl',
        type: 'yaml',
        title: 'SSL Configuration',
        description: 'i.e. certificate_authorities, supported_protocols, verification_mode etc.',
        multi: false,
        required: false,
        show_user: false
      }, {
        name: 'interval',
        type: 'text',
        title: 'Interval to query Splunk Enterprise REST API',
        description: 'Go Duration syntax (eg. 10s)',
        multi: false,
        required: true,
        show_user: true,
        default: '10s'
      }, {
        name: 'search',
        type: 'text',
        title: 'Splunk search string',
        multi: false,
        required: true,
        show_user: true,
        default: 'search sourcetype=aws:cloudtrail'
      }, {
        name: 'tags',
        type: 'text',
        title: 'Tags',
        multi: true,
        required: false,
        show_user: false,
        default: ['forwarded']
      }],
      template_path: 'httpjson.yml.hbs',
      title: 'AWS CloudTrail logs via Splunk Enterprise REST API',
      description: 'Collect AWS CloudTrail logs via Splunk Enterprise REST API',
      enabled: false
    }],
    package: 'aws',
    path: 'cloudtrail'
  }, {
    type: 'logs',
    dataset: 'aws.cloudwatch_logs',
    title: 'AWS CloudWatch logs',
    release: 'beta',
    ingest_pipeline: 'default',
    streams: [{
      input: 's3',
      vars: [{
        name: 'visibility_timeout',
        type: 'text',
        title: 'Visibility Timeout',
        description: 'The duration that the received messages are hidden from subsequent retrieve requests after being retrieved by a ReceiveMessage request.  The maximum is 12 hours.',
        multi: false,
        required: false,
        show_user: false
      }, {
        name: 'api_timeout',
        type: 'text',
        title: 'API Timeout',
        description: 'The maximum duration of AWS API can take. The maximum is half of the visibility timeout value.',
        multi: false,
        required: false,
        show_user: false
      }, {
        name: 'queue_url',
        type: 'text',
        title: 'Queue URL',
        description: 'URL of the AWS SQS queue that messages will be received from.',
        multi: false,
        required: true,
        show_user: true
      }, {
        name: 'fips_enabled',
        type: 'bool',
        title: 'Enable S3 FIPS',
        description: 'Enabling this option changes the service name from `s3` to `s3-fips` for connecting to the correct service endpoint.',
        multi: false,
        required: false,
        show_user: false,
        default: false
      }],
      template_path: 's3.yml.hbs',
      title: 'AWS CloudWatch logs',
      description: 'Collect AWS CloudWatch logs using s3 input',
      enabled: true
    }],
    package: 'aws',
    path: 'cloudwatch_logs'
  }, {
    type: 'metrics',
    dataset: 'aws.cloudwatch_metrics',
    title: 'AWS CloudWatch metrics',
    release: 'beta',
    streams: [{
      input: 'aws/metrics',
      vars: [{
        name: 'period',
        type: 'text',
        title: 'Period',
        multi: false,
        required: true,
        show_user: true,
        default: '300s'
      }, {
        name: 'regions',
        type: 'text',
        title: 'Regions',
        multi: true,
        required: false,
        show_user: true
      }, {
        name: 'latency',
        type: 'text',
        title: 'Latency',
        multi: false,
        required: false,
        show_user: false
      }, {
        name: 'metrics',
        type: 'yaml',
        title: 'Metrics',
        multi: false,
        required: true,
        show_user: true,
        default: '- namespace: AWS/EC2\n  resource_type: ec2:instance\n  name:\n    - CPUUtilization\n    - DiskWriteOps\n  statistic:\n    - Average\n    - Maximum\n  # dimensions:\n   # - name: InstanceId\n      # value: i-123456\n  # tags:\n    # - key: created-by\n      # value: foo\n'
      }],
      template_path: 'stream.yml.hbs',
      title: 'AWS CloudWatch metrics',
      description: 'Collect AWS CloudWatch metrics',
      enabled: true
    }],
    package: 'aws',
    path: 'cloudwatch_metrics'
  }, {
    type: 'metrics',
    dataset: 'aws.dynamodb',
    title: 'AWS DynamoDB metrics',
    release: 'beta',
    streams: [{
      input: 'aws/metrics',
      vars: [{
        name: 'period',
        type: 'text',
        title: 'Period',
        multi: false,
        required: true,
        show_user: true,
        default: '5m'
      }, {
        name: 'regions',
        type: 'text',
        title: 'Regions',
        multi: true,
        required: false,
        show_user: true
      }, {
        name: 'latency',
        type: 'text',
        title: 'Latency',
        multi: false,
        required: false,
        show_user: false
      }, {
        name: 'tags_filter',
        type: 'yaml',
        title: 'Tags Filter',
        multi: false,
        required: false,
        show_user: false,
        default: '# - key: "created-by"\n  # value: "foo"\n'
      }],
      template_path: 'stream.yml.hbs',
      title: 'AWS DynamoDB metrics',
      description: 'Collect AWS DynamoDB metrics',
      enabled: true
    }],
    package: 'aws',
    path: 'dynamodb'
  }, {
    type: 'metrics',
    dataset: 'aws.ebs',
    title: 'AWS EBS metrics',
    release: 'beta',
    streams: [{
      input: 'aws/metrics',
      vars: [{
        name: 'period',
        type: 'text',
        title: 'Period',
        multi: false,
        required: true,
        show_user: true,
        default: '5m'
      }, {
        name: 'regions',
        type: 'text',
        title: 'Regions',
        multi: true,
        required: false,
        show_user: true
      }, {
        name: 'latency',
        type: 'text',
        title: 'Latency',
        multi: false,
        required: false,
        show_user: false
      }, {
        name: 'tags_filter',
        type: 'yaml',
        title: 'Tags Filter',
        multi: false,
        required: false,
        show_user: false,
        default: '# - key: "created-by"\n  # value: "foo"\n'
      }],
      template_path: 'stream.yml.hbs',
      title: 'AWS EBS metrics',
      description: 'Collect AWS EBS metrics',
      enabled: true
    }],
    package: 'aws',
    path: 'ebs'
  }, {
    type: 'logs',
    dataset: 'aws.ec2_logs',
    title: 'AWS EC2 logs',
    release: 'beta',
    ingest_pipeline: 'default',
    streams: [{
      input: 's3',
      vars: [{
        name: 'visibility_timeout',
        type: 'text',
        title: 'Visibility Timeout',
        description: 'The duration that the received messages are hidden from subsequent retrieve requests after being retrieved by a ReceiveMessage request.  The maximum is 12 hours.',
        multi: false,
        required: false,
        show_user: false
      }, {
        name: 'api_timeout',
        type: 'text',
        title: 'API Timeout',
        description: 'The maximum duration of AWS API can take. The maximum is half of the visibility timeout value.',
        multi: false,
        required: false,
        show_user: false
      }, {
        name: 'queue_url',
        type: 'text',
        title: 'Queue URL',
        description: 'URL of the AWS SQS queue that messages will be received from.',
        multi: false,
        required: true,
        show_user: true
      }, {
        name: 'fips_enabled',
        type: 'bool',
        title: 'Enable S3 FIPS',
        description: 'Enabling this option changes the service name from `s3` to `s3-fips` for connecting to the correct service endpoint.',
        multi: false,
        required: false,
        show_user: false,
        default: false
      }],
      template_path: 's3.yml.hbs',
      title: 'AWS EC2 logs',
      description: 'Collect AWS EC2 logs using s3 input',
      enabled: true
    }],
    package: 'aws',
    path: 'ec2_logs'
  }, {
    type: 'metrics',
    dataset: 'aws.ec2_metrics',
    title: 'AWS EC2 metrics',
    release: 'beta',
    streams: [{
      input: 'aws/metrics',
      vars: [{
        name: 'period',
        type: 'text',
        title: 'Period',
        multi: false,
        required: true,
        show_user: true,
        default: '5m'
      }, {
        name: 'regions',
        type: 'text',
        title: 'Regions',
        multi: true,
        required: false,
        show_user: true
      }, {
        name: 'latency',
        type: 'text',
        title: 'Latency',
        multi: false,
        required: false,
        show_user: false
      }, {
        name: 'tags_filter',
        type: 'yaml',
        title: 'Tags Filter',
        multi: false,
        required: false,
        show_user: false,
        default: '# - key: "created-by"\n  # value: "foo"\n'
      }],
      template_path: 'stream.yml.hbs',
      title: 'AWS EC2 metrics',
      description: 'Collect AWS EC2 metrics',
      enabled: true
    }],
    package: 'aws',
    path: 'ec2_metrics'
  }, {
    type: 'logs',
    dataset: 'aws.elb_logs',
    title: 'AWS ELB logs',
    release: 'beta',
    ingest_pipeline: 'default',
    streams: [{
      input: 's3',
      vars: [{
        name: 'visibility_timeout',
        type: 'text',
        title: 'Visibility Timeout',
        description: 'The duration that the received messages are hidden from subsequent retrieve requests after being retrieved by a ReceiveMessage request.  The maximum is 12 hours.',
        multi: false,
        required: false,
        show_user: false
      }, {
        name: 'api_timeout',
        type: 'text',
        title: 'API Timeout',
        description: 'The maximum duration of AWS API can take. The maximum is half of the visibility timeout value.',
        multi: false,
        required: false,
        show_user: false
      }, {
        name: 'queue_url',
        type: 'text',
        title: 'Queue URL',
        description: 'URL of the AWS SQS queue that messages will be received from.',
        multi: false,
        required: true,
        show_user: true
      }, {
        name: 'fips_enabled',
        type: 'bool',
        title: 'Enable S3 FIPS',
        description: 'Enabling this option changes the service name from `s3` to `s3-fips` for connecting to the correct service endpoint.',
        multi: false,
        required: false,
        show_user: false,
        default: false
      }],
      template_path: 's3.yml.hbs',
      title: 'AWS ELB logs',
      description: 'Collect AWS ELB logs using s3 input',
      enabled: true
    }],
    package: 'aws',
    path: 'elb_logs'
  }, {
    type: 'metrics',
    dataset: 'aws.elb_metrics',
    title: 'AWS ELB metrics',
    release: 'beta',
    streams: [{
      input: 'aws/metrics',
      vars: [{
        name: 'period',
        type: 'text',
        title: 'Period',
        multi: false,
        required: true,
        show_user: true,
        default: '1m'
      }, {
        name: 'regions',
        type: 'text',
        title: 'Regions',
        multi: true,
        required: false,
        show_user: true
      }, {
        name: 'latency',
        type: 'text',
        title: 'Latency',
        multi: false,
        required: false,
        show_user: false
      }, {
        name: 'tags_filter',
        type: 'yaml',
        title: 'Tags Filter',
        multi: false,
        required: false,
        show_user: false,
        default: '# - key: "created-by"\n  # value: "foo"\n'
      }],
      template_path: 'stream.yml.hbs',
      title: 'AWS ELB metrics',
      description: 'Collect AWS ELB metrics',
      enabled: true
    }],
    package: 'aws',
    path: 'elb_metrics'
  }, {
    type: 'metrics',
    dataset: 'aws.lambda',
    title: 'AWS Lambda metrics',
    release: 'beta',
    streams: [{
      input: 'aws/metrics',
      vars: [{
        name: 'period',
        type: 'text',
        title: 'Period',
        multi: false,
        required: true,
        show_user: true,
        default: '5m'
      }, {
        name: 'regions',
        type: 'text',
        title: 'Regions',
        multi: true,
        required: false,
        show_user: true
      }, {
        name: 'latency',
        type: 'text',
        title: 'Latency',
        multi: false,
        required: false,
        show_user: false
      }, {
        name: 'tags_filter',
        type: 'yaml',
        title: 'Tags Filter',
        multi: false,
        required: false,
        show_user: false,
        default: '# - key: "created-by"\n  # value: "foo"\n'
      }],
      template_path: 'stream.yml.hbs',
      title: 'AWS Lambda metrics',
      description: 'Collect AWS Lambda metrics',
      enabled: true
    }],
    package: 'aws',
    path: 'lambda'
  }, {
    type: 'metrics',
    dataset: 'aws.natgateway',
    title: 'AWS NAT gateway metrics',
    release: 'beta',
    streams: [{
      input: 'aws/metrics',
      vars: [{
        name: 'period',
        type: 'text',
        title: 'Period',
        multi: false,
        required: true,
        show_user: true,
        default: '1m'
      }, {
        name: 'regions',
        type: 'text',
        title: 'Regions',
        multi: true,
        required: false,
        show_user: true
      }, {
        name: 'latency',
        type: 'text',
        title: 'Latency',
        multi: false,
        required: false,
        show_user: false
      }],
      template_path: 'stream.yml.hbs',
      title: 'AWS NAT gateway metrics',
      description: 'Collect AWS NAT gateway metrics',
      enabled: true
    }],
    package: 'aws',
    path: 'natgateway'
  }, {
    type: 'metrics',
    dataset: 'aws.rds',
    title: 'AWS RDS metrics',
    release: 'beta',
    streams: [{
      input: 'aws/metrics',
      vars: [{
        name: 'period',
        type: 'text',
        title: 'Period',
        multi: false,
        required: true,
        show_user: true,
        default: '1m'
      }, {
        name: 'regions',
        type: 'text',
        title: 'Regions',
        multi: true,
        required: false,
        show_user: true
      }, {
        name: 'latency',
        type: 'text',
        title: 'Latency',
        multi: false,
        required: false,
        show_user: false
      }, {
        name: 'tags_filter',
        type: 'yaml',
        title: 'Tags Filter',
        multi: false,
        required: false,
        show_user: false,
        default: '# - key: "created-by"\n  # value: "foo"\n'
      }],
      template_path: 'stream.yml.hbs',
      title: 'AWS RDS metrics',
      description: 'Collect AWS RDS metrics',
      enabled: true
    }],
    package: 'aws',
    path: 'rds'
  }, {
    type: 'metrics',
    dataset: 'aws.s3_daily_storage',
    title: 'AWS S3 daily storage metrics',
    release: 'beta',
    streams: [{
      input: 'aws/metrics',
      vars: [{
        name: 'period',
        type: 'text',
        title: 'Period',
        multi: false,
        required: true,
        show_user: true,
        default: '24h'
      }, {
        name: 'regions',
        type: 'text',
        title: 'Regions',
        multi: true,
        required: false,
        show_user: true
      }, {
        name: 'latency',
        type: 'text',
        title: 'Latency',
        multi: false,
        required: false,
        show_user: false
      }],
      template_path: 'stream.yml.hbs',
      title: 'AWS S3 daily storage metrics',
      description: 'Collect AWS S3 daily storage metrics',
      enabled: true
    }],
    package: 'aws',
    path: 's3_daily_storage'
  }, {
    type: 'metrics',
    dataset: 'aws.s3_request',
    title: 'AWS S3 request metrics',
    release: 'beta',
    streams: [{
      input: 'aws/metrics',
      vars: [{
        name: 'period',
        type: 'text',
        title: 'Period',
        multi: false,
        required: true,
        show_user: true,
        default: '1m'
      }, {
        name: 'regions',
        type: 'text',
        title: 'Regions',
        multi: true,
        required: false,
        show_user: true
      }, {
        name: 'latency',
        type: 'text',
        title: 'Latency',
        multi: false,
        required: false,
        show_user: false
      }],
      template_path: 'stream.yml.hbs',
      title: 'AWS S3 request metrics',
      description: 'Collect AWS S3 request metrics',
      enabled: true
    }],
    package: 'aws',
    path: 's3_request'
  }, {
    type: 'logs',
    dataset: 'aws.s3access',
    title: 'AWS s3access logs',
    release: 'beta',
    ingest_pipeline: 'default',
    streams: [{
      input: 's3',
      vars: [{
        name: 'visibility_timeout',
        type: 'text',
        title: 'Visibility Timeout',
        description: 'The duration that the received messages are hidden from subsequent retrieve requests after being retrieved by a ReceiveMessage request.  The maximum is 12 hours.',
        multi: false,
        required: false,
        show_user: false
      }, {
        name: 'api_timeout',
        type: 'text',
        title: 'API Timeout',
        description: 'The maximum duration of AWS API can take. The maximum is half of the visibility timeout value.',
        multi: false,
        required: false,
        show_user: false
      }, {
        name: 'queue_url',
        type: 'text',
        title: 'Queue URL',
        description: 'URL of the AWS SQS queue that messages will be received from.',
        multi: false,
        required: true,
        show_user: true
      }, {
        name: 'fips_enabled',
        type: 'bool',
        title: 'Enable S3 FIPS',
        description: 'Enabling this option changes the service name from `s3` to `s3-fips` for connecting to the correct service endpoint.',
        multi: false,
        required: false,
        show_user: false,
        default: false
      }],
      template_path: 's3.yml.hbs',
      title: 'AWS s3access logs',
      description: 'Collect AWS s3access logs using s3 input',
      enabled: true
    }],
    package: 'aws',
    path: 's3access'
  }, {
    type: 'metrics',
    dataset: 'aws.sns',
    title: 'AWS SNS metrics',
    release: 'beta',
    streams: [{
      input: 'aws/metrics',
      vars: [{
        name: 'period',
        type: 'text',
        title: 'Period',
        multi: false,
        required: true,
        show_user: true,
        default: '5m'
      }, {
        name: 'regions',
        type: 'text',
        title: 'Regions',
        multi: true,
        required: false,
        show_user: true
      }, {
        name: 'latency',
        type: 'text',
        title: 'Latency',
        multi: false,
        required: false,
        show_user: false
      }, {
        name: 'tags_filter',
        type: 'yaml',
        title: 'Tags Filter',
        multi: false,
        required: false,
        show_user: false,
        default: '# - key: "created-by"\n  # value: "foo"\n'
      }],
      template_path: 'stream.yml.hbs',
      title: 'AWS SNS metrics',
      description: 'Collect AWS SNS metrics',
      enabled: true
    }],
    package: 'aws',
    path: 'sns'
  }, {
    type: 'metrics',
    dataset: 'aws.sqs',
    title: 'AWS SQS metrics',
    release: 'beta',
    streams: [{
      input: 'aws/metrics',
      vars: [{
        name: 'period',
        type: 'text',
        title: 'Period',
        multi: false,
        required: true,
        show_user: true,
        default: '5m'
      }, {
        name: 'regions',
        type: 'text',
        title: 'Regions',
        multi: true,
        required: false,
        show_user: true
      }, {
        name: 'latency',
        type: 'text',
        title: 'Latency',
        multi: false,
        required: false,
        show_user: false
      }],
      template_path: 'stream.yml.hbs',
      title: 'AWS SQS metrics',
      description: 'Collect AWS SQS metrics',
      enabled: true
    }],
    package: 'aws',
    path: 'sqs'
  }, {
    type: 'metrics',
    dataset: 'aws.transitgateway',
    title: 'AWS Transit Gateway metrics',
    release: 'beta',
    streams: [{
      input: 'aws/metrics',
      vars: [{
        name: 'period',
        type: 'text',
        title: 'Period',
        multi: false,
        required: true,
        show_user: true,
        default: '1m'
      }, {
        name: 'regions',
        type: 'text',
        title: 'Regions',
        multi: true,
        required: false,
        show_user: true
      }, {
        name: 'latency',
        type: 'text',
        title: 'Latency',
        multi: false,
        required: false,
        show_user: false
      }],
      template_path: 'stream.yml.hbs',
      title: 'AWS Transit Gateway metrics',
      description: 'Collect AWS Transit Gateway metrics',
      enabled: true
    }],
    package: 'aws',
    path: 'transitgateway'
  }, {
    type: 'metrics',
    dataset: 'aws.usage',
    title: 'AWS usage metrics',
    release: 'beta',
    streams: [{
      input: 'aws/metrics',
      vars: [{
        name: 'period',
        type: 'text',
        title: 'Period',
        multi: false,
        required: true,
        show_user: true,
        default: '1m'
      }, {
        name: 'regions',
        type: 'text',
        title: 'Regions',
        multi: true,
        required: false,
        show_user: true
      }, {
        name: 'latency',
        type: 'text',
        title: 'Latency',
        multi: false,
        required: false,
        show_user: false
      }],
      template_path: 'stream.yml.hbs',
      title: 'AWS usage metrics',
      description: 'Collect AWS usage metrics',
      enabled: true
    }],
    package: 'aws',
    path: 'usage'
  }, {
    type: 'logs',
    dataset: 'aws.vpcflow',
    title: 'AWS vpcflow logs',
    release: 'beta',
    ingest_pipeline: 'default',
    streams: [{
      input: 's3',
      vars: [{
        name: 'visibility_timeout',
        type: 'text',
        title: 'Visibility Timeout',
        description: 'The duration that the received messages are hidden from subsequent retrieve requests after being retrieved by a ReceiveMessage request.  The maximum is 12 hours.',
        multi: false,
        required: false,
        show_user: false
      }, {
        name: 'api_timeout',
        type: 'text',
        title: 'API Timeout',
        description: 'The maximum duration of AWS API can take. The maximum is half of the visibility timeout value.',
        multi: false,
        required: false,
        show_user: false
      }, {
        name: 'queue_url',
        type: 'text',
        title: 'Queue URL',
        description: 'URL of the AWS SQS queue that messages will be received from.',
        multi: false,
        required: true,
        show_user: true
      }, {
        name: 'fips_enabled',
        type: 'bool',
        title: 'Enable S3 FIPS',
        description: 'Enabling this option changes the service name from `s3` to `s3-fips` for connecting to the correct service endpoint.',
        multi: false,
        required: false,
        show_user: false,
        default: false
      }],
      template_path: 's3.yml.hbs',
      title: 'AWS vpcflow logs',
      description: 'Collect AWS vpcflow logs using s3 input',
      enabled: true
    }],
    package: 'aws',
    path: 'vpcflow'
  }, {
    type: 'metrics',
    dataset: 'aws.vpn',
    title: 'AWS VPN metrics',
    release: 'beta',
    streams: [{
      input: 'aws/metrics',
      vars: [{
        name: 'period',
        type: 'text',
        title: 'Period',
        multi: false,
        required: true,
        show_user: true,
        default: '1m'
      }, {
        name: 'regions',
        type: 'text',
        title: 'Regions',
        multi: true,
        required: false,
        show_user: true
      }, {
        name: 'latency',
        type: 'text',
        title: 'Latency',
        multi: false,
        required: false,
        show_user: false
      }, {
        name: 'tags_filter',
        type: 'yaml',
        title: 'Tags Filter',
        multi: false,
        required: false,
        show_user: false,
        default: '# - key: "created-by"\n  # value: "foo"\n'
      }],
      template_path: 'stream.yml.hbs',
      title: 'AWS VPN metrics',
      description: 'Collect AWS VPN metrics',
      enabled: true
    }],
    package: 'aws',
    path: 'vpn'
  }],
  owner: {
    github: 'elastic/integrations'
  },
  vars: [{
    name: 'shared_credential_file',
    type: 'text',
    title: 'Shared Credential File',
    description: 'Directory of the shared credentials file',
    multi: false,
    required: false,
    show_user: false
  }, {
    name: 'credential_profile_name',
    type: 'text',
    title: 'Credential Profile Name',
    multi: false,
    required: false,
    show_user: true
  }, {
    name: 'access_key_id',
    type: 'text',
    title: 'Access Key ID',
    multi: false,
    required: false,
    show_user: false
  }, {
    name: 'secret_access_key',
    type: 'text',
    title: 'Secret Access Key',
    multi: false,
    required: false,
    show_user: false
  }, {
    name: 'session_token',
    type: 'text',
    title: 'Session Token',
    multi: false,
    required: false,
    show_user: false
  }, {
    name: 'role_arn',
    type: 'text',
    title: 'Role ARN',
    multi: false,
    required: false,
    show_user: false
  }, {
    name: 'endpoint',
    type: 'text',
    title: 'Endpoint',
    description: 'URL of the entry point for an AWS web service',
    multi: false,
    required: false,
    show_user: false,
    default: 'amazonaws.com'
  }],
  latestVersion: '0.5.3',
  removable: true,
  status: 'not_installed'
};
exports.AWS_PACKAGE = AWS_PACKAGE;
const INVALID_AWS_POLICY = {
  name: 'aws-1',
  namespace: 'default',
  package: {
    name: 'aws',
    title: 'AWS',
    version: '0.5.3'
  },
  enabled: true,
  policy_id: 'some-agent-policy-id',
  output_id: 'some-output-id',
  inputs: [{
    type: 'aws/metrics',
    policy_template: 'billing',
    enabled: true,
    streams: [{
      enabled: true,
      data_stream: {
        type: 'metrics',
        dataset: 'aws.billing'
      },
      vars: {
        period: {
          value: '12h',
          type: 'text'
        },
        latency: {
          type: 'text'
        },
        'cost_explorer_config.group_by_dimension_keys': {
          value: ['AZ', 'INSTANCE_TYPE', 'SERVICE'],
          type: 'text'
        },
        'cost_explorer_config.group_by_tag_keys': {
          value: ['aws:createdBy'],
          type: 'text'
        }
      }
    }]
  }, {
    type: 's3',
    policy_template: 'cloudtrail',
    enabled: true,
    streams: [{
      enabled: true,
      data_stream: {
        type: 'logs',
        dataset: 'aws.cloudtrail'
      },
      vars: {
        visibility_timeout: {
          type: 'text'
        },
        api_timeout: {
          type: 'text'
        },
        queue_url: {
          type: 'text'
        },
        fips_enabled: {
          value: false,
          type: 'bool'
        }
      }
    }]
  }, {
    type: 'httpjson',
    policy_template: 'cloudtrail',
    enabled: false,
    streams: [{
      enabled: false,
      data_stream: {
        type: 'logs',
        dataset: 'aws.cloudtrail'
      },
      vars: {
        url: {
          value: 'https://server.example.com:8089',
          type: 'text'
        },
        username: {
          type: 'text'
        },
        password: {
          type: 'password'
        },
        ssl: {
          type: 'yaml'
        },
        interval: {
          value: '10s',
          type: 'text'
        },
        search: {
          value: 'search sourcetype=aws:cloudtrail',
          type: 'text'
        },
        tags: {
          value: ['forwarded'],
          type: 'text'
        }
      }
    }]
  }, {
    type: 's3',
    policy_template: 'cloudwatch',
    enabled: true,
    streams: [{
      enabled: true,
      data_stream: {
        type: 'logs',
        dataset: 'aws.cloudwatch_logs'
      },
      vars: {
        visibility_timeout: {
          type: 'text'
        },
        api_timeout: {
          type: 'text'
        },
        queue_url: {
          type: 'text'
        },
        fips_enabled: {
          value: false,
          type: 'bool'
        }
      }
    }]
  }, {
    type: 'aws/metrics',
    policy_template: 'cloudwatch',
    enabled: true,
    streams: [{
      enabled: true,
      data_stream: {
        type: 'metrics',
        dataset: 'aws.cloudwatch_metrics'
      },
      vars: {
        period: {
          value: '300s',
          type: 'text'
        },
        regions: {
          value: [],
          type: 'text'
        },
        latency: {
          type: 'text'
        },
        metrics: {
          value: '- namespace: AWS/EC2\n  resource_type: ec2:instance\n  name:\n    - CPUUtilization\n    - DiskWriteOps\n  statistic:\n    - Average\n    - Maximum\n  # dimensions:\n   # - name: InstanceId\n      # value: i-123456\n  # tags:\n    # - key: created-by\n      # value: foo\n',
          type: 'yaml'
        }
      }
    }]
  }, {
    type: 'aws/metrics',
    policy_template: 'dynamodb',
    enabled: true,
    streams: [{
      enabled: true,
      data_stream: {
        type: 'metrics',
        dataset: 'aws.dynamodb'
      },
      vars: {
        period: {
          value: '5m',
          type: 'text'
        },
        regions: {
          value: [],
          type: 'text'
        },
        latency: {
          type: 'text'
        },
        tags_filter: {
          value: '# - key: "created-by"\n  # value: "foo"\n',
          type: 'yaml'
        }
      }
    }]
  }, {
    type: 'aws/metrics',
    policy_template: 'ebs',
    enabled: true,
    streams: [{
      enabled: true,
      data_stream: {
        type: 'metrics',
        dataset: 'aws.ebs'
      },
      vars: {
        period: {
          value: '5m',
          type: 'text'
        },
        regions: {
          value: [],
          type: 'text'
        },
        latency: {
          type: 'text'
        },
        tags_filter: {
          value: '# - key: "created-by"\n  # value: "foo"\n',
          type: 'yaml'
        }
      }
    }]
  }, {
    type: 's3',
    policy_template: 'ec2',
    enabled: true,
    streams: [{
      enabled: true,
      data_stream: {
        type: 'logs',
        dataset: 'aws.ec2_logs'
      },
      vars: {
        visibility_timeout: {
          type: 'text'
        },
        api_timeout: {
          type: 'text'
        },
        queue_url: {
          type: 'text'
        },
        fips_enabled: {
          value: false,
          type: 'bool'
        }
      }
    }]
  }, {
    type: 'aws/metrics',
    policy_template: 'ec2',
    enabled: true,
    streams: [{
      enabled: true,
      data_stream: {
        type: 'metrics',
        dataset: 'aws.ec2_metrics'
      },
      vars: {
        period: {
          value: '5m',
          type: 'text'
        },
        regions: {
          value: [],
          type: 'text'
        },
        latency: {
          type: 'text'
        },
        tags_filter: {
          value: '# - key: "created-by"\n  # value: "foo"\n',
          type: 'yaml'
        }
      }
    }]
  }, {
    type: 's3',
    policy_template: 'elb',
    enabled: true,
    streams: [{
      enabled: true,
      data_stream: {
        type: 'logs',
        dataset: 'aws.elb_logs'
      },
      vars: {
        visibility_timeout: {
          type: 'text'
        },
        api_timeout: {
          type: 'text'
        },
        queue_url: {
          type: 'text'
        },
        fips_enabled: {
          value: false,
          type: 'bool'
        }
      }
    }]
  }, {
    type: 'aws/metrics',
    policy_template: 'elb',
    enabled: true,
    streams: [{
      enabled: true,
      data_stream: {
        type: 'metrics',
        dataset: 'aws.elb_metrics'
      },
      vars: {
        period: {
          value: '1m',
          type: 'text'
        },
        regions: {
          value: [],
          type: 'text'
        },
        latency: {
          type: 'text'
        },
        tags_filter: {
          value: '# - key: "created-by"\n  # value: "foo"\n',
          type: 'yaml'
        }
      }
    }]
  }, {
    type: 'aws/metrics',
    policy_template: 'lambda',
    enabled: true,
    streams: [{
      enabled: true,
      data_stream: {
        type: 'metrics',
        dataset: 'aws.lambda'
      },
      vars: {
        period: {
          value: '5m',
          type: 'text'
        },
        regions: {
          value: [],
          type: 'text'
        },
        latency: {
          type: 'text'
        },
        tags_filter: {
          value: '# - key: "created-by"\n  # value: "foo"\n',
          type: 'yaml'
        }
      }
    }]
  }, {
    type: 'aws/metrics',
    policy_template: 'natgateway',
    enabled: true,
    streams: [{
      enabled: true,
      data_stream: {
        type: 'metrics',
        dataset: 'aws.natgateway'
      },
      vars: {
        period: {
          value: '1m',
          type: 'text'
        },
        regions: {
          value: [],
          type: 'text'
        },
        latency: {
          type: 'text'
        }
      }
    }]
  }, {
    type: 'aws/metrics',
    policy_template: 'rds',
    enabled: true,
    streams: [{
      enabled: true,
      data_stream: {
        type: 'metrics',
        dataset: 'aws.rds'
      },
      vars: {
        period: {
          value: '1m',
          type: 'text'
        },
        regions: {
          value: [],
          type: 'text'
        },
        latency: {
          type: 'text'
        },
        tags_filter: {
          value: '# - key: "created-by"\n  # value: "foo"\n',
          type: 'yaml'
        }
      }
    }]
  }, {
    type: 's3',
    policy_template: 's3',
    enabled: true,
    streams: [{
      enabled: true,
      data_stream: {
        type: 'logs',
        dataset: 'aws.s3access'
      },
      vars: {
        visibility_timeout: {
          type: 'text'
        },
        api_timeout: {
          type: 'text'
        },
        queue_url: {
          type: 'text'
        },
        fips_enabled: {
          value: false,
          type: 'bool'
        }
      }
    }]
  }, {
    type: 'aws/metrics',
    policy_template: 's3',
    enabled: true,
    streams: [{
      enabled: true,
      data_stream: {
        type: 'metrics',
        dataset: 'aws.s3_daily_storage'
      },
      vars: {
        period: {
          value: '24h',
          type: 'text'
        },
        regions: {
          value: [],
          type: 'text'
        },
        latency: {
          type: 'text'
        }
      }
    }, {
      enabled: true,
      data_stream: {
        type: 'metrics',
        dataset: 'aws.s3_request'
      },
      vars: {
        period: {
          value: '1m',
          type: 'text'
        },
        regions: {
          value: [],
          type: 'text'
        },
        latency: {
          type: 'text'
        }
      }
    }]
  }, {
    type: 'aws/metrics',
    policy_template: 'sns',
    enabled: true,
    streams: [{
      enabled: true,
      data_stream: {
        type: 'metrics',
        dataset: 'aws.sns'
      },
      vars: {
        period: {
          value: '5m',
          type: 'text'
        },
        regions: {
          value: [],
          type: 'text'
        },
        latency: {
          type: 'text'
        },
        tags_filter: {
          value: '# - key: "created-by"\n  # value: "foo"\n',
          type: 'yaml'
        }
      }
    }]
  }, {
    type: 'aws/metrics',
    policy_template: 'sqs',
    enabled: true,
    streams: [{
      enabled: true,
      data_stream: {
        type: 'metrics',
        dataset: 'aws.sqs'
      },
      vars: {
        period: {
          value: '5m',
          type: 'text'
        },
        regions: {
          value: [],
          type: 'text'
        },
        latency: {
          type: 'text'
        }
      }
    }]
  }, {
    type: 'aws/metrics',
    policy_template: 'transitgateway',
    enabled: true,
    streams: [{
      enabled: true,
      data_stream: {
        type: 'metrics',
        dataset: 'aws.transitgateway'
      },
      vars: {
        period: {
          value: '1m',
          type: 'text'
        },
        regions: {
          value: [],
          type: 'text'
        },
        latency: {
          type: 'text'
        }
      }
    }]
  }, {
    type: 'aws/metrics',
    policy_template: 'usage',
    enabled: true,
    streams: [{
      enabled: true,
      data_stream: {
        type: 'metrics',
        dataset: 'aws.usage'
      },
      vars: {
        period: {
          value: '1m',
          type: 'text'
        },
        regions: {
          value: [],
          type: 'text'
        },
        latency: {
          type: 'text'
        }
      }
    }]
  }, {
    type: 's3',
    policy_template: 'vpcflow',
    enabled: true,
    streams: [{
      enabled: true,
      data_stream: {
        type: 'logs',
        dataset: 'aws.vpcflow'
      },
      vars: {
        visibility_timeout: {
          type: 'text'
        },
        api_timeout: {
          type: 'text'
        },
        queue_url: {
          type: 'text'
        },
        fips_enabled: {
          value: false,
          type: 'bool'
        }
      }
    }]
  }, {
    type: 'aws/metrics',
    policy_template: 'vpn',
    enabled: true,
    streams: [{
      enabled: true,
      data_stream: {
        type: 'metrics',
        dataset: 'aws.vpn'
      },
      vars: {
        period: {
          value: '1m',
          type: 'text'
        },
        regions: {
          value: [],
          type: 'text'
        },
        latency: {
          type: 'text'
        },
        tags_filter: {
          value: '# - key: "created-by"\n  # value: "foo"\n',
          type: 'yaml'
        }
      }
    }]
  }],
  vars: {
    shared_credential_file: {
      type: 'text'
    },
    credential_profile_name: {
      type: 'text'
    },
    access_key_id: {
      type: 'text'
    },
    secret_access_key: {
      type: 'text'
    },
    session_token: {
      type: 'text'
    },
    role_arn: {
      type: 'text'
    },
    endpoint: {
      value: 'amazonaws.com',
      type: 'text'
    }
  }
};
exports.INVALID_AWS_POLICY = INVALID_AWS_POLICY;
const VALID_AWS_POLICY = {
  name: 'aws-1',
  namespace: 'default',
  package: {
    name: 'aws',
    title: 'AWS',
    version: '0.5.3'
  },
  enabled: true,
  policy_id: 'some-agent-policy-id',
  output_id: 'some-output-id',
  inputs: [{
    type: 'aws/metrics',
    policy_template: 'billing',
    enabled: true,
    streams: [{
      enabled: true,
      data_stream: {
        type: 'metrics',
        dataset: 'aws.billing'
      },
      vars: {
        period: {
          value: '12h',
          type: 'text'
        },
        latency: {
          type: 'text'
        },
        'cost_explorer_config.group_by_dimension_keys': {
          value: ['AZ', 'INSTANCE_TYPE', 'SERVICE'],
          type: 'text'
        },
        'cost_explorer_config.group_by_tag_keys': {
          value: ['aws:createdBy'],
          type: 'text'
        }
      }
    }]
  }, {
    type: 's3',
    policy_template: 'cloudtrail',
    enabled: true,
    streams: [{
      enabled: true,
      data_stream: {
        type: 'logs',
        dataset: 'aws.cloudtrail'
      },
      vars: {
        visibility_timeout: {
          type: 'text'
        },
        api_timeout: {
          type: 'text'
        },
        queue_url: {
          type: 'text',
          value: 'http://localhost'
        },
        fips_enabled: {
          value: false,
          type: 'bool'
        }
      }
    }]
  }, {
    type: 'httpjson',
    policy_template: 'cloudtrail',
    enabled: false,
    streams: [{
      enabled: false,
      data_stream: {
        type: 'logs',
        dataset: 'aws.cloudtrail'
      },
      vars: {
        url: {
          value: 'https://server.example.com:8089',
          type: 'text'
        },
        username: {
          type: 'text'
        },
        password: {
          type: 'password'
        },
        ssl: {
          type: 'yaml'
        },
        interval: {
          value: '10s',
          type: 'text'
        },
        search: {
          value: 'search sourcetype=aws:cloudtrail',
          type: 'text'
        },
        tags: {
          value: ['forwarded'],
          type: 'text'
        }
      }
    }]
  }, {
    type: 's3',
    policy_template: 'cloudwatch',
    enabled: true,
    streams: [{
      enabled: true,
      data_stream: {
        type: 'logs',
        dataset: 'aws.cloudwatch_logs'
      },
      vars: {
        visibility_timeout: {
          type: 'text'
        },
        api_timeout: {
          type: 'text'
        },
        queue_url: {
          type: 'text',
          value: 'http://localhost'
        },
        fips_enabled: {
          value: false,
          type: 'bool'
        }
      }
    }]
  }, {
    type: 'aws/metrics',
    policy_template: 'cloudwatch',
    enabled: true,
    streams: [{
      enabled: true,
      data_stream: {
        type: 'metrics',
        dataset: 'aws.cloudwatch_metrics'
      },
      vars: {
        period: {
          value: '300s',
          type: 'text'
        },
        regions: {
          value: [],
          type: 'text'
        },
        latency: {
          type: 'text'
        },
        metrics: {
          value: '- namespace: AWS/EC2\n  resource_type: ec2:instance\n  name:\n    - CPUUtilization\n    - DiskWriteOps\n  statistic:\n    - Average\n    - Maximum\n  # dimensions:\n   # - name: InstanceId\n      # value: i-123456\n  # tags:\n    # - key: created-by\n      # value: foo\n',
          type: 'yaml'
        }
      }
    }]
  }, {
    type: 'aws/metrics',
    policy_template: 'dynamodb',
    enabled: true,
    streams: [{
      enabled: true,
      data_stream: {
        type: 'metrics',
        dataset: 'aws.dynamodb'
      },
      vars: {
        period: {
          value: '5m',
          type: 'text'
        },
        regions: {
          value: [],
          type: 'text'
        },
        latency: {
          type: 'text'
        },
        tags_filter: {
          value: '# - key: "created-by"\n  # value: "foo"\n',
          type: 'yaml'
        }
      }
    }]
  }, {
    type: 'aws/metrics',
    policy_template: 'ebs',
    enabled: true,
    streams: [{
      enabled: true,
      data_stream: {
        type: 'metrics',
        dataset: 'aws.ebs'
      },
      vars: {
        period: {
          value: '5m',
          type: 'text'
        },
        regions: {
          value: [],
          type: 'text'
        },
        latency: {
          type: 'text'
        },
        tags_filter: {
          value: '# - key: "created-by"\n  # value: "foo"\n',
          type: 'yaml'
        }
      }
    }]
  }, {
    type: 's3',
    policy_template: 'ec2',
    enabled: true,
    streams: [{
      enabled: true,
      data_stream: {
        type: 'logs',
        dataset: 'aws.ec2_logs'
      },
      vars: {
        visibility_timeout: {
          type: 'text'
        },
        api_timeout: {
          type: 'text'
        },
        queue_url: {
          type: 'text',
          value: 'http://localhost'
        },
        fips_enabled: {
          value: false,
          type: 'bool'
        }
      }
    }]
  }, {
    type: 'aws/metrics',
    policy_template: 'ec2',
    enabled: true,
    streams: [{
      enabled: true,
      data_stream: {
        type: 'metrics',
        dataset: 'aws.ec2_metrics'
      },
      vars: {
        period: {
          value: '5m',
          type: 'text'
        },
        regions: {
          value: [],
          type: 'text'
        },
        latency: {
          type: 'text'
        },
        tags_filter: {
          value: '# - key: "created-by"\n  # value: "foo"\n',
          type: 'yaml'
        }
      }
    }]
  }, {
    type: 's3',
    policy_template: 'elb',
    enabled: true,
    streams: [{
      enabled: true,
      data_stream: {
        type: 'logs',
        dataset: 'aws.elb_logs'
      },
      vars: {
        visibility_timeout: {
          type: 'text'
        },
        api_timeout: {
          type: 'text'
        },
        queue_url: {
          type: 'text',
          value: 'http://localhost'
        },
        fips_enabled: {
          value: false,
          type: 'bool'
        }
      }
    }]
  }, {
    type: 'aws/metrics',
    policy_template: 'elb',
    enabled: true,
    streams: [{
      enabled: true,
      data_stream: {
        type: 'metrics',
        dataset: 'aws.elb_metrics'
      },
      vars: {
        period: {
          value: '1m',
          type: 'text'
        },
        regions: {
          value: [],
          type: 'text'
        },
        latency: {
          type: 'text'
        },
        tags_filter: {
          value: '# - key: "created-by"\n  # value: "foo"\n',
          type: 'yaml'
        }
      }
    }]
  }, {
    type: 'aws/metrics',
    policy_template: 'lambda',
    enabled: true,
    streams: [{
      enabled: true,
      data_stream: {
        type: 'metrics',
        dataset: 'aws.lambda'
      },
      vars: {
        period: {
          value: '5m',
          type: 'text'
        },
        regions: {
          value: [],
          type: 'text'
        },
        latency: {
          type: 'text'
        },
        tags_filter: {
          value: '# - key: "created-by"\n  # value: "foo"\n',
          type: 'yaml'
        }
      }
    }]
  }, {
    type: 'aws/metrics',
    policy_template: 'natgateway',
    enabled: true,
    streams: [{
      enabled: true,
      data_stream: {
        type: 'metrics',
        dataset: 'aws.natgateway'
      },
      vars: {
        period: {
          value: '1m',
          type: 'text'
        },
        regions: {
          value: [],
          type: 'text'
        },
        latency: {
          type: 'text'
        }
      }
    }]
  }, {
    type: 'aws/metrics',
    policy_template: 'rds',
    enabled: true,
    streams: [{
      enabled: true,
      data_stream: {
        type: 'metrics',
        dataset: 'aws.rds'
      },
      vars: {
        period: {
          value: '1m',
          type: 'text'
        },
        regions: {
          value: [],
          type: 'text'
        },
        latency: {
          type: 'text'
        },
        tags_filter: {
          value: '# - key: "created-by"\n  # value: "foo"\n',
          type: 'yaml'
        }
      }
    }]
  }, {
    type: 's3',
    policy_template: 's3',
    enabled: true,
    streams: [{
      enabled: true,
      data_stream: {
        type: 'logs',
        dataset: 'aws.s3access'
      },
      vars: {
        visibility_timeout: {
          type: 'text'
        },
        api_timeout: {
          type: 'text'
        },
        queue_url: {
          type: 'text',
          value: 'http://localhost'
        },
        fips_enabled: {
          value: false,
          type: 'bool'
        }
      }
    }]
  }, {
    type: 'aws/metrics',
    policy_template: 's3',
    enabled: true,
    streams: [{
      enabled: true,
      data_stream: {
        type: 'metrics',
        dataset: 'aws.s3_daily_storage'
      },
      vars: {
        period: {
          value: '24h',
          type: 'text'
        },
        regions: {
          value: [],
          type: 'text'
        },
        latency: {
          type: 'text'
        }
      }
    }, {
      enabled: true,
      data_stream: {
        type: 'metrics',
        dataset: 'aws.s3_request'
      },
      vars: {
        period: {
          value: '1m',
          type: 'text'
        },
        regions: {
          value: [],
          type: 'text'
        },
        latency: {
          type: 'text'
        }
      }
    }]
  }, {
    type: 'aws/metrics',
    policy_template: 'sns',
    enabled: true,
    streams: [{
      enabled: true,
      data_stream: {
        type: 'metrics',
        dataset: 'aws.sns'
      },
      vars: {
        period: {
          value: '5m',
          type: 'text'
        },
        regions: {
          value: [],
          type: 'text'
        },
        latency: {
          type: 'text'
        },
        tags_filter: {
          value: '# - key: "created-by"\n  # value: "foo"\n',
          type: 'yaml'
        }
      }
    }]
  }, {
    type: 'aws/metrics',
    policy_template: 'sqs',
    enabled: true,
    streams: [{
      enabled: true,
      data_stream: {
        type: 'metrics',
        dataset: 'aws.sqs'
      },
      vars: {
        period: {
          value: '5m',
          type: 'text'
        },
        regions: {
          value: [],
          type: 'text'
        },
        latency: {
          type: 'text'
        }
      }
    }]
  }, {
    type: 'aws/metrics',
    policy_template: 'transitgateway',
    enabled: true,
    streams: [{
      enabled: true,
      data_stream: {
        type: 'metrics',
        dataset: 'aws.transitgateway'
      },
      vars: {
        period: {
          value: '1m',
          type: 'text'
        },
        regions: {
          value: [],
          type: 'text'
        },
        latency: {
          type: 'text'
        }
      }
    }]
  }, {
    type: 'aws/metrics',
    policy_template: 'usage',
    enabled: true,
    streams: [{
      enabled: true,
      data_stream: {
        type: 'metrics',
        dataset: 'aws.usage'
      },
      vars: {
        period: {
          value: '1m',
          type: 'text'
        },
        regions: {
          value: [],
          type: 'text'
        },
        latency: {
          type: 'text'
        }
      }
    }]
  }, {
    type: 's3',
    policy_template: 'vpcflow',
    enabled: true,
    streams: [{
      enabled: true,
      data_stream: {
        type: 'logs',
        dataset: 'aws.vpcflow'
      },
      vars: {
        visibility_timeout: {
          type: 'text'
        },
        api_timeout: {
          type: 'text'
        },
        queue_url: {
          type: 'text',
          value: 'http://localhost'
        },
        fips_enabled: {
          value: false,
          type: 'bool'
        }
      }
    }]
  }, {
    type: 'aws/metrics',
    policy_template: 'vpn',
    enabled: true,
    streams: [{
      enabled: true,
      data_stream: {
        type: 'metrics',
        dataset: 'aws.vpn'
      },
      vars: {
        period: {
          value: '1m',
          type: 'text'
        },
        regions: {
          value: [],
          type: 'text'
        },
        latency: {
          type: 'text'
        },
        tags_filter: {
          value: '# - key: "created-by"\n  # value: "foo"\n',
          type: 'yaml'
        }
      }
    }]
  }],
  vars: {
    shared_credential_file: {
      type: 'text'
    },
    credential_profile_name: {
      type: 'text'
    },
    access_key_id: {
      type: 'text'
    },
    secret_access_key: {
      type: 'text'
    },
    session_token: {
      type: 'text'
    },
    role_arn: {
      type: 'text'
    },
    endpoint: {
      value: 'amazonaws.com',
      type: 'text'
    }
  }
};
exports.VALID_AWS_POLICY = VALID_AWS_POLICY;