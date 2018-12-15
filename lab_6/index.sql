-- Scalar function

CREATE OR REPLACE FUNCTION getCountOfPlaceTypes()
RETURNS INTEGER AS $result$
DECLARE
  result INTEGER;
BEGIN
  SELECT COUNT(*) INTO result FROM public."placeTypes";
  RETURN result;
END;
$result$ LANGUAGE plpgsql;

SELECT getCountOfPlaceTypes() AS "Result";

-- Function that return table with list of admins

CREATE OR REPLACE FUNCTION getListOfAdmin()
RETURNS TABLE (
  username VARCHAR
)
AS $$
BEGIN
  RETURN QUERY EXECUTE 'SELECT "username" FROM public.users WHERE "isAdmin"=true';
END;
$$ LANGUAGE plpgsql;

SELECT getListOfAdmin();