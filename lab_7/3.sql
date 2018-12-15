-- Count factorial of rows in table
CREATE OR REPLACE FUNCTION myOwnFunctionWhile()
RETURNS trigger AS
$$
DECLARE
  currentNum INTEGER;
  factorial INTEGER := 1;
begin
  currentNum := (SELECT COUNT(*) FROM public."placeTypes");
  factorial := 1;
	WHILE currentNum > 0 LOOP
    factorial = factorial * currentNum;
    currentNum = currentNum - 1;
  END LOOP;

  RAISE INFO 'Factorial of rows in table equal %s', factorial;

	return NEW;
end;
$$ language plpgsql;

DROP TRIGGER afterInsertPlaceType ON public."placeTypes";
CREATE TRIGGER afterInsertPlaceType AFTER INSERT ON public."placeTypes"
EXECUTE PROCEDURE myOwnFunctionWhile();