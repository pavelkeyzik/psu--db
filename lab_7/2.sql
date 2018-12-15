-- Work with string function TRIM()
CREATE OR REPLACE FUNCTION myOwnFunctionString()
RETURNS trigger AS
$$
begin
	NEW."title" = trim(NEW."title");
	RAISE INFO '"%"', NEW."title";
	IF EXISTS (SELECT title FROM public."placeTypes" where trim(NEW."title")=title)
	THEN RAISE EXCEPTION 'You already have a place type with this "%" title', NEW."title";
	END IF;

	return NEW;
end;
$$ language plpgsql;

DROP TRIGGER afterInsertPlaceType ON public."placeTypes";
CREATE TRIGGER afterInsertPlaceType AFTER INSERT ON public."placeTypes"
EXECUTE PROCEDURE myOwnFunctionString();