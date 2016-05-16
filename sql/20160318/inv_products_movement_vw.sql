ALTER ALGORITHM = UNDEFINED DEFINER = `root` @`localhost` SQL SECURITY DEFINER VIEW `inv_products_movement_vw`
AS
   SELECT 1 AS `level`,
          'PUR' AS `type`,
          `inv_purchases`.`pur_date` AS `trans_date`,
          `inv_purchases`.`pur_invono` AS `trans_ref`,
          `inv_products`.`pdt_code` AS `pdt_code`,
          `inv_products`.`pdt_description` AS `pdt_description`,
          `inv_purchases_details`.`purd_qty` AS `qty`,
          `inv_purchases_details`.`purd_price` AS `price`,
          `inv_purchases_details`.`purd_qty` AS `signed_qty`,
          `inv_accounts`.`acc_code` AS `acct_code`,
          `inv_accounts`.`acc_name` AS `acct_name`
     FROM (((`inv_products` JOIN `inv_purchases_details`)
            JOIN `inv_purchases`)
           JOIN `inv_accounts`)
    WHERE (    (`inv_products`.`pdt_code` =
                   `inv_purchases_details`.`purd_pdt_code`)
           AND (`inv_purchases_details`.`purd_pur_id` =
                   `inv_purchases`.`pur_id`)
           AND (`inv_accounts`.`acc_code` = `inv_purchases`.`pur_acc_code`)
           AND (`inv_purchases`.`pur_status` = 'POSTED'))
   UNION ALL
   SELECT 2 AS `level`,
          'SAL' AS `type`,
          `inv_invoices`.`inv_date` AS `trans_date`,
          `inv_invoices`.`inv_invono` AS `trans_ref`,
          `inv_products`.`pdt_code` AS `pdt_code`,
          `inv_products`.`pdt_description` AS `pdt_description`,
          `inv_invoice_dtls`.`invd_qty` AS `qty`,
          `inv_invoice_dtls`.`invd_price` AS `price`,
          (`inv_invoice_dtls`.`invd_qty` * -(1)) AS `signed_qty`,
          `inv_accounts`.`acc_code` AS `acct_code`,
          `inv_accounts`.`acc_name` AS `acct_name`
     FROM (((`inv_products` JOIN `inv_invoices`) JOIN `inv_invoice_dtls`)
           JOIN `inv_accounts`)
    WHERE (    (`inv_products`.`pdt_code` =
                   `inv_invoice_dtls`.`invd_pdt_code`)
           AND (`inv_invoices`.`inv_id` = `inv_invoice_dtls`.`invd_inv_id`)
           AND (`inv_invoices`.`inv_acc_code` = `inv_accounts`.`acc_code`)
           AND (`inv_invoices`.`inv_status` = 'POSTED'))
   UNION ALL
   SELECT 3 AS `level`,
          'TIN' AS `type`,
          `inv_transfers`.`tnsf_date` AS `trans_date`,
          `inv_transfers`.`tnsf_type` AS `trans_ref`,
          `inv_products`.`pdt_code` AS `pdt_code`,
          `inv_products`.`pdt_description` AS `pdt_description`,
          `inv_transfer_dtls`.`tnsfd_qty` AS `qty`,
          0 AS `price`,
          `inv_transfer_dtls`.`tnsfd_qty` AS `signed_qty`,
          `inv_locations`.`loc_code` AS `acct_code`,
          `inv_locations`.`loc_description` AS `acct_name`
     FROM (((`inv_products` JOIN `inv_transfers`) JOIN `inv_transfer_dtls`)
           JOIN `inv_locations`)
    WHERE (    (`inv_products`.`pdt_code` =
                   `inv_transfer_dtls`.`tnsfd_pdt_code`)
           AND (`inv_transfer_dtls`.`tnsfd_tnsf_id` =
                   `inv_transfers`.`tnsf_id`)
           AND (`inv_transfers`.`tnsf_from_loc_code` =
                   `inv_locations`.`loc_code`)
           AND (`inv_transfers`.`tnsf_status` = 'POSTED')
           AND (`inv_transfers`.`tnsf_type` = 'IN'))
   UNION ALL
   SELECT 4 AS `level`,
          'TOUT' AS `type`,
          `inv_transfers`.`tnsf_date` AS `trans_date`,
          `inv_transfers`.`tnsf_type` AS `trans_ref`,
          `inv_products`.`pdt_code` AS `pdt_code`,
          `inv_products`.`pdt_description` AS `pdt_description`,
          `inv_transfer_dtls`.`tnsfd_qty` AS `qty`,
          0 AS `price`,
          (`inv_transfer_dtls`.`tnsfd_qty` * -(1)) AS `signed_qty`,
          `inv_locations`.`loc_code` AS `acct_code`,
          `inv_locations`.`loc_description` AS `acct_name`
     FROM (((`inv_products` JOIN `inv_transfers`) JOIN `inv_transfer_dtls`)
           JOIN `inv_locations`)
    WHERE (    (`inv_products`.`pdt_code` =
                   `inv_transfer_dtls`.`tnsfd_pdt_code`)
           AND (`inv_transfer_dtls`.`tnsfd_tnsf_id` =
                   `inv_transfers`.`tnsf_id`)
           AND (`inv_transfers`.`tnsf_from_loc_code` =
                   `inv_locations`.`loc_code`)
           AND (`inv_transfers`.`tnsf_status` = 'POSTED')
           AND (`inv_transfers`.`tnsf_type` = 'OUT'));